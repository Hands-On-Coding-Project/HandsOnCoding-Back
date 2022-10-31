import prisma from "../utils/prisma"
import { Test, TestRawDTO } from "../models/test";
import { getStep } from "./stepsService";

//Find
export async function getTestsInStep(stepId: string): Promise<Test[]> {
    const actualStep = await getStep(stepId)

    if(!actualStep)
        throw `Theres no step [id=${stepId}]`
    
    const result: Test[] = await prisma.test.findMany({
        where:{
            stepId
        }
    })

    return result;
}

export async function getTestInStep(stepId: string, id: string): Promise<Test | null>{
    const result: Test | null = await prisma.test.findFirst({
        where:{
            stepId,
            id
        }
    })

    return result;
}

//Create
export async function createTestInStep(stepId: string, test:TestRawDTO): Promise<Test>{
    const result: Test = await prisma.test.create({
        data:{
            ...test,
            step:{
                connect:{
                    id: stepId
                }
            }
        }
    })

    return result
}

//Update
export async function updateTestInStep(stepId:string, id:string, test:TestRawDTO): Promise<Test>{
    const actualTest = await getTestInStep(stepId, id)
    
    if(!actualTest)
        throw `Theres no test [id=${id}, stepId=${stepId}]`

    const result = await prisma.test.update({
        where:{
            id
        },
        data:test,
    })

    return result
}

//Delete
export async function deleteTestInStep(stepId:string, id:string): Promise<Test>{
    const actualTest = await getTestInStep(stepId, id)
    
    if(!actualTest)
        throw `Theres no test [id=${id}, stepId=${stepId}]`
    
    const result = await prisma.test.delete({
        where:{
            id
        }
    })

    return result
}