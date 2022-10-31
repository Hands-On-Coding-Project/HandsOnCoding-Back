import { FileRawDTO, FileDTO, File } from "../models/file";
import prisma from "../utils/prisma";

// Find
export async function getSolutions(): Promise<File[]> {
    const result: File[] = await prisma.solution.findMany()

    return result
}

export async function getSolution(id: string): Promise<File | null> {
    const result: File | null = await prisma.solution.findUnique({
        where: {
            id
        },
    })

    return result
}

export async function getSolutionInStep(stepId: string): Promise<File | null>{
    const result: File | null = await prisma.solution.findUnique({
        where: {
            stepId
        },
    })

    return result
}

// Upsert
export async function upsertSolutionInStep(stepId: string, solution: FileRawDTO): Promise<File>{
    const result: File = await prisma.solution.upsert({
        where:{
            stepId
        },
        update:solution,
        create:{
            ...solution,
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
export async function createSolution(solution: FileDTO): Promise<File> {
    const { stepId, ...solutionInfo } = solution
    const result: File = await prisma.solution.create({
        data: {
            ...solutionInfo,
            step:{
                connect:{
                    id:stepId
                }
            }
        },
    })

    return result
}

// Update
export async function updateSolution(id: string, solution: FileDTO): Promise<File> {
    const { stepId, ...solutionInfo } = solution
    const result: File = await prisma.solution.update({
        where: {
            id
        },
        data: {
            ...solutionInfo,
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
export async function deleteSolution(id: string): Promise<File> {
    const result: File = await prisma.solution.delete({
        where: {
            id
        },
    })

    return result
}

export async function deleteSolutionInStep(stepId: string): Promise<File> {
    const result: File = await prisma.solution.delete({
        where: {
            stepId
        },
    })

    return result
}