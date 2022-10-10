import { StepDTO, Step, StepNested} from "../models/steps";
import { truncate } from "fs";
import prisma from "../utils/prisma";

//Find
export async function getSteps(): Promise<Step[]> {
    const result: Step[] = await prisma.step.findMany()

    return result
}

export async function getStep(id: string): Promise<StepNested | null> {
    const result: StepNested | null = await prisma.step.findUnique({
        where: {
            id
        },
        include:{
            template:true,
            solution:true,
        }
    })

    return result
}

//Create
export async function createStep(step: StepDTO): Promise<Step> {
    const result: Step = await prisma.step.create({
        data: {
            ...step
        }
    })

    return result
}

//Update
export async function updateStep(id: string, step: StepDTO): Promise<Step> {
    const result: Step = await prisma.step.update({
        where: {
            id
        },
        data: {
            ...step
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