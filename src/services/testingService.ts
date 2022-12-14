import prisma from "../utils/prisma";
import { CourseDTO, Course } from "../models/course";
import { ResourceRawDTO, Resource } from "../models/resource";
import { Scenario, ScenarioDTO } from "../models/testing";
import { createLessonInCourse } from "./lessonsService";
import { createStepInLesson } from "./stepsService";
import { upsertTemplateInStep } from "./templatesService";
import { upsertSolutionInStep } from "./solutionsService";
import { createTestInStep } from "./testsService";
import { Test } from "../models/test";
import { StepNested } from "../models/step";

export async function reset() {
    const deleteTests = prisma.test.deleteMany()
    const deleteTemplates = prisma.template.deleteMany()
    const deleteSolutions = prisma.solution.deleteMany()
    const deleteSteps = prisma.step.deleteMany()
    const deleteLessons = prisma.lesson.deleteMany()
    const deleteLanguages = prisma.language.deleteMany()
    const deleteResources = prisma.resource.deleteMany()
    const deleteCourses = prisma.course.deleteMany()

    await prisma.$transaction([deleteTests, deleteTemplates, deleteSolutions, deleteSteps, deleteLessons, deleteLanguages, deleteResources, deleteCourses])
}

export async function setUpScene(scene: ScenarioDTO): Promise<Scenario> {
    await reset()

    const { languages, courses } = scene;

    // All Languages
    const languagesRes = await Promise.all(languages.map(async language => {
        // Languages
        const languageRes = await prisma.language.create({ data: language })//[Change]
        return languageRes
    }))

    // All Courses
    const coursesRes = await Promise.all(courses.map(async ({ resources, lessons, ...course }) => {
        //Course
        const courseRes = await createCourse(course)//[Change]

        // All Resources
        const resourcesRes = await Promise.all(resources.map(async resource => {
            // Resource
            const resourceRes = await createResourceInCourse(courseRes.id, resource)//[Change]
            return resourceRes
        }))

        // All Lessons
        const lessonsRes = await Promise.all(lessons.map(async ({ steps, ...lesson }) => {
            // Lesson
            const lessonRes = await createLessonInCourse(courseRes.id, lesson)

            // All Steps
            const stepsRes: StepNested[] = []
            for(const { template, solution, tests, ...step} of steps){
                // Step
                const stepRes = await createStepInLesson(lessonRes.id, step)

                const templateRes = template ? await upsertTemplateInStep(stepRes.id, template) : null

                const solutionRes = solution ? await upsertSolutionInStep(stepRes.id, solution) : null

                // All tests
                const testsRes: Test[] = []
                for (const test of tests){
                    // Test
                    testsRes.push(await createTestInStep(stepRes.id, test))
                }

                stepsRes.push({ ...stepRes, template: templateRes, solution: solutionRes, tests: testsRes })
            }

            return { ...lessonRes, steps: stepsRes }
        }))

        return { ...courseRes, resources: resourcesRes, lessons: lessonsRes }
    }))

    return { languages: languagesRes, courses: coursesRes }
}

// [Delete]
async function createCourse(course: CourseDTO): Promise<Course> {//Delete
    const result: Course = await prisma.course.create({ data: course })
    return result
}

async function createResourceInCourse(courseId: string, resource: ResourceRawDTO): Promise<Resource> {// Delete
    const result: Resource = await prisma.resource.create({
        data: {
            ...resource,
            course: {
                connect: {
                    id: courseId
                }
            }
        }
    })
    return result
}
// ...