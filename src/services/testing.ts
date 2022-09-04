import { Template } from "@prisma/client";
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