import { CourseDTO, Course, CourseNested } from "../models/course";
import prisma from "../utils/prisma";

// Find
export async function getCourses(): Promise<Course[]> {
    const result: Course[] = await prisma.course.findMany()

    return result
}

export async function getCourse(id: string, info:'nested'|'default'='nested'): Promise<CourseNested | null> {
    const lessons = info === 'nested'
    const resources = info === 'nested'
    
    const result: CourseNested | null = await prisma.course.findUnique({
        where: {
            id
        },
        include:{
            lessons,
            resources,
        }
    })

    return result
}

// Create
export async function createCourse(course: CourseDTO): Promise<Course> {
    const result: Course = await prisma.course.create({
        data: course
    })

    return result
}

// Update
export async function updateCourse(id: string, course: CourseDTO): Promise<Course> {
    const result: Course = await prisma.course.update({
        where: {
            id
        },
        data: course
    })

    return result
}

// Delete
export async function deleteCourse(id: string): Promise<Course> {
    const result: Course = await prisma.course.delete({
        where: {
            id
        }
    })

    return result
}