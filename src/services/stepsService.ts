import { StepDTO, Step, StepNested, StepRawDTO} from "../models/steps";
import { truncate } from "fs";
import prisma from "../utils/prisma";
import { deleteSolutionInStep } from "./solutionsService";
import { deleteTemplateInStep } from "./templatesService";

// Find
export async function getSteps(): Promise<Step[]> {
    const result: Step[] = await prisma.step.findMany()

    return result
}

export async function getStepsInLesson(lessonId: string): Promise<Step[]> {
    const result: Step[] = await prisma.step.findMany({
        where:{
            lessonId
        }
    })

    return result;
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

// Create
export async function createStep(step: StepDTO): Promise<Step> {
    const { lessonId, ...stepInfo } = step

    return createStepInLesson(lessonId, stepInfo)
}

export async function createStepInLesson(lessonId: string, step: StepRawDTO){
    const result: Step = await prisma.step.create({
        data: {
            ...step,
            lesson:{
                connect:{
                    id:lessonId
                }
            }
        }
    })

    return result
}

// Update
export async function updateStep(id: string, step: StepDTO): Promise<Step> {
    const { lessonId, ...stepInfo } = step
    const result: Step = await prisma.step.update({
        where: {
            id
        },
        data: {
            ...stepInfo,
            lesson:{
                connect:{
                    id:lessonId
                }
            }
        }
    })

    return result
}

export async function deleteStep(id: string, force=false): Promise<Step> {
    if(force){
        const step = await getStep(id)
        if(step?.solution) await deleteSolutionInStep(id)
        if(step?.template) await deleteTemplateInStep(id)
    }

    const result: Step = await prisma.step.delete({
        where: {
            id
        }
    })

    return result
}