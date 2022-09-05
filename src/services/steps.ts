import { Step, Template, Solution } from "@prisma/client";
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
        include: {
            template: true,
            solution:true,
        },
    })

    return result
}

export async function createStep(nestedStep: NestedStep): Promise<Step> {
    const step: Step = nestedStep
    const template = nestedStep.template
    const solution = nestedStep.solution

    const result: Step = await prisma.step.create({
        data: {
            ...step,
            template:{
                create:template
            },
            solution:{
                create:solution
            }
        }
    })

    return result
}

export async function updateStep(id: string, nestedStep: NestedStep): Promise<Step> {
    const step: Step = nestedStep
    const template = nestedStep.template
    const solution = nestedStep.solution

    const result: Step = await prisma.step.update({
        where: {
            id
        },
        data: {
            ...step,
            template:{
                delete: true,
                create: template
            },
            solution:{
                delete: true,
                create:solution
            }
        }
    })

    return result
}

export async function deleteStep(id: string): Promise<Step> {
    const result: Step = await prisma.step.delete({
        where: {
            id
        }
    })

    return result
}

interface NestedStep extends Step{
    template?: Template
    solution?: Solution
}