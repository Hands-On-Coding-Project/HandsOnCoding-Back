import { TemplateDTO, Template } from "../models/templates";
import prisma from "../utils/prisma";

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

export async function createTemplate(template: TemplateDTO): Promise<Template> {
    const { stepId, ...templateInfo } = template
    console.log(template)
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
    console.log(result)

    return result
}

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

export async function deleteTemplate(id: string): Promise<Template> {
    const result: Template = await prisma.template.delete({
        where: {
            id
        },
    })

    return result
}