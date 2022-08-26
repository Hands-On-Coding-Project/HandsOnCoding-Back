import { Step } from "@prisma/client";
import prisma from "../utils/prisma";

async function getSteps(): Promise<Step[]> {
    const steps = await prisma.step.findMany()

    return steps;
}

async function getStep(id: string): Promise<Step | null> {
    const step = await prisma.step.findUnique({
        where:{
            id
        },
    })

    return step;
}

async function createStep(step:StepProxy){
    const result = await prisma.step?.create({
        data: {
            description: step.description,
        },
    })//Error!
}

interface StepProxy{
    description: string
}

export {getStep, getSteps, createStep}