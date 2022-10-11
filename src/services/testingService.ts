import { Course, Language, Lesson, Step } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { Scenario } from "../models/tests";
import prisma from "../utils/prisma";

export async function reset() {
    const deleteTemplates = prisma.template.deleteMany()
    const deleteSolutions = prisma.solution.deleteMany()
    const deleteSteps = prisma.step.deleteMany()
    const deleteLessons = prisma.lesson.deleteMany()
    const deleteLanguages = prisma.language.deleteMany()
    const deleteResources = prisma.resource.deleteMany()
    const deleteCourses = prisma.course.deleteMany()

    await prisma.$transaction([deleteTemplates,deleteSolutions,deleteSteps,deleteLessons,deleteLanguages,deleteResources,deleteCourses])
}

export async function setUpScene(scene: Scenario) : Promise<any>{
    const { languages, courses } = scene;

    //Languages
    const languagesResult = await prisma.language.createMany({
        data:languages
    })

    //Courses
    const coursesResult = await Promise.all(
        courses.map(async (course)=>{
            const {lessons, resources, ...courseInfo} = course
            const coursesResult = await prisma.course.create({
                data:{
                    ...courseInfo,
                    resources:{
                        createMany:{
                            data:resources
                        }
                    }
                }
            })

            //Lessons
            const lessonsResult = await Promise.all(
                lessons.map(async (course)=>{
                    
                })
            )

            return coursesResult
        }
    ))
}

export async function defaultStep() : Promise<Step>{


    const course: Course = await prisma.course.create({
        data: {
            title: "APO I",
            description: "Algoritmos y programacion orientada a Objetos 1"
        }
    })

    const language: Language = await prisma.language.create({
        data:{
            name:"python",
            extension:"py",
            api:"http://localhost:12345/code"
        }
    })

    const lesson: Lesson = await prisma.lesson.create({
        data:{
            title:"Print",
            courseId:course.id,
            languageName:"python"
        }
    })

    const step: Step = await prisma.step.create({
        data:{
            description:'Print "Hello world!"',
            lessonId: lesson.id
        }
    })

    return step
}