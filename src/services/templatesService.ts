import { TemplateRawDTO, TemplateDTO, Template } from "../models/templates";
import prisma from "../utils/prisma";

// Find
export async function getTemplates(): Promise<Template[]> {
    const result: Template[] = await prisma.template.findMany()

    return result
}

export async function getTemplate(id: string): Promise<Template | null> {
    const result: Template | null = await prisma.template.findUnique({
        where: {
            id
        },
    })

    return result
}

export async function getTemplateInStep(stepId: string): Promise<Template | null>{
    const result: Template | null = await prisma.template.findUnique({
        where: {
            stepId
        },
    })

    return result
}

// Upsert
export async function upsertTemplateInStep(stepId: string, template: TemplateRawDTO): Promise<Template>{
    const result: Template = await prisma.template.upsert({
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
export async function createTemplate(template: TemplateDTO): Promise<Template> {
    const { stepId, ...templateInfo } = template
    const result: Template = await prisma.template.create({
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
export async function updateTemplate(id: string, template: TemplateDTO): Promise<Template> {
    const { stepId, ...templateInfo } = template
    const result: Template = await prisma.template.update({
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
export async function deleteTemplate(id: string): Promise<Template> {
    const result: Template = await prisma.template.delete({
        where: {
            id
        },
    })

    return result
}

export async function deleteTemplateInStep(stepId: string): Promise<Template> {
    const result: Template = await prisma.template.delete({
        where: {
            stepId
        },
    })

    return result
}