import { Lesson } from "@prisma/client";
import prisma from "../utils/prisma";

//Find
export async function getLessons(): Promise<Lesson[]> {
    const result: Lesson[] = await prisma.lesson.findMany()

    return result
}

export async function getLesson(id: string): Promise<Lesson | null> {
    const result: Lesson | null = await prisma.lesson.findUnique({
        where: {
            id
        }
    })

    return result
}

//Create
export async function createLesson(lesson: Lesson): Promise<Lesson> {
    const { languageId, courseId, ...lessonInfo } = lesson
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
                    id:languageId
                }
            }
        }
    })

    return result
}

//Update
export async function updateLesson(id: string, lesson: Lesson): Promise<Lesson> {
    const { languageId, courseId, ...lessonInfo } = lesson
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
                    id:languageId
                }
            }
        }
    })

    return result
}

//Delete
export async function deleteLesson(id: string): Promise<Lesson> {
    const result: Lesson = await prisma.lesson.delete({
        where: {
            id
        }
    })

    return result
}