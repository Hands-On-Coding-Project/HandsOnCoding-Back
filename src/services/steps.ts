import { Step } from "@prisma/client";
import prisma from "../utils/prisma";

export async function getSteps(): Promise<Step[]> {
    const result: Step[] = await prisma.step.findMany()

    return result
}

export async function getStep(id: string): Promise<Step | null> {
    const result: Step | null = await prisma.step.findUnique({
        where: {
            id
        },
    })

    return result
}

export async function createStep(step: Step): Promise<Step> {
    const result: Step = await prisma.step.create({
        data: step,
    })

    return result
}

export async function updateStep(id: string, step: Step): Promise<Step> {
    const result: Step = await prisma.step.update({
        where: {
            id
        },
        data: step,
    })

    return result
}

export async function deleteStep(id: string): Promise<Step> {
    const result: Step = await prisma.step.delete({
        where: {
            id
        },
    })

    return result
}