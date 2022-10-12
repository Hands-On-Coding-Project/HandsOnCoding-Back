import { LessonRawDTO, LessonDTO, Lesson, LessonNested } from "../models/lessons";
import prisma from "../utils/prisma";

// Find
export async function getLessons(): Promise<Lesson[]> {
    const result: Lesson[] = await prisma.lesson.findMany()

    return result
}

export async function getLesson(id: string): Promise<LessonNested | null> {
    const result: LessonNested | null = await prisma.lesson.findUnique({
        where: {
            id
        },
        include: {
            steps: true
        }
    })

    return result
}

// Create
export async function createLessonInCourse(courseId: string, lesson: LessonRawDTO): Promise<Lesson>{
    return createLesson({courseId, ...lesson})
}

export async function createLesson(lesson: LessonDTO): Promise<Lesson> {
    const { languageName, courseId, ...lessonInfo } = lesson
    const result: Lesson = await prisma.lesson.create({
        data: {
            ...lessonInfo,
            course: {
                connect:{
                    id:courseId
                }
            },
            language: {
                connect:{
                    name:languageName
                }
            }
        }
    })

    return result
}

// Update
export async function updateLesson(id: string, lesson: LessonDTO): Promise<Lesson> {
    const { languageName, courseId, ...lessonInfo } = lesson
    const result: Lesson = await prisma.lesson.update({
        where: {
            id
        },
        data: {
            ...lessonInfo,
            course: {
                connect:{
                    id:courseId
                }
            },
            language: {
                connect:{
                    name:languageName
                }
            }
        }
    })

    return result
}

// Delete
export async function deleteLesson(id: string): Promise<Lesson> {
    const result: Lesson = await prisma.lesson.delete({
        where: {
            id
        }
    })

    return result
}