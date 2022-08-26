import { Template } from "@prisma/client";
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

export async function createTemplate(template: Template): Promise<Template> {
    const result: Template = await prisma.template.create({
        data: template,
    })

    return result
}

export async function updateTemplate(id: string, template: Template): Promise<Template> {
    const result: Template = await prisma.template.update({
        where: {
            id
        },
        data: template,
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