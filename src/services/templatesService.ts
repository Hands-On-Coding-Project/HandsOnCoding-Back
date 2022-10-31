import { FileRawDTO, FileDTO, File } from "../models/file";
import prisma from "../utils/prisma";

// Find
export async function getTemplates(): Promise<File[]> {
    const result: File[] = await prisma.template.findMany()

    return result
}

export async function getTemplate(id: string): Promise<File | null> {
    const result: File | null = await prisma.template.findUnique({
        where: {
            id
        },
    })

    return result
}

export async function getTemplateInStep(stepId: string): Promise<File | null>{
    const result: File | null = await prisma.template.findUnique({
        where: {
            stepId
        },
    })

    return result
}

// Upsert
export async function upsertTemplateInStep(stepId: string, template: FileRawDTO): Promise<File>{
    const result: File = await prisma.template.upsert({
        where:{
            stepId
        },
        update:template,
        create:{
            ...template,
            step:{
                connect:{
                    id: stepId
                }
            }
        }
    })

    return result
}

// Create
export async function createTemplate(template: FileDTO): Promise<File> {
    const { stepId, ...templateInfo } = template
    const result: File = await prisma.template.create({
        data:{
            ...templateInfo,
            step:{
                connect:{
                    id:stepId
                }
            }
        }
    })

    return result
}

// Update
export async function updateTemplate(id: string, template: FileDTO): Promise<File> {
    const { stepId, ...templateInfo } = template
    const result: File = await prisma.template.update({
        where: {
            id
        },
        data: {
            ...templateInfo,
            step:{
                connect:{
                    id:stepId
                }
            }
        },
    })

    return result
}

// Delete
export async function deleteTemplate(id: string): Promise<File> {
    const result: File = await prisma.template.delete({
        where: {
            id
        },
    })

    return result
}

export async function deleteTemplateInStep(stepId: string): Promise<File> {
    const result: File = await prisma.template.delete({
        where: {
            stepId
        },
    })

    return result
}