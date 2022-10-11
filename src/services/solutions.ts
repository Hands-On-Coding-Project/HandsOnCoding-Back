import { SolutionRawDTO, SolutionDTO, Solution } from "../models/solutions";
import prisma from "../utils/prisma";

// Find
export async function getSolutions(): Promise<Solution[]> {
    const result: Solution[] = await prisma.solution.findMany()

    return result
}

export async function getSolution(id: string): Promise<Solution | null> {
    const result: Solution | null = await prisma.solution.findUnique({
        where: {
            id
        },
    })

    return result
}

export async function getSolutionInStep(stepId: string): Promise<Solution | null>{
    const result: Solution | null = await prisma.solution.findUnique({
        where: {
            stepId
        },
    })

    return result
}

//Upsert
export async function upsertSolutionInStep(stepId: string, solution: SolutionRawDTO): Promise<Solution>{
    const result: Solution = await prisma.solution.upsert({
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
export async function createSolution(solution: SolutionDTO): Promise<Solution> {
    const { stepId, ...solutionInfo } = solution
    const result: Solution = await prisma.solution.create({
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
export async function updateSolution(id: string, solution: SolutionDTO): Promise<Solution> {
    const { stepId, ...solutionInfo } = solution
    const result: Solution = await prisma.solution.update({
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
export async function deleteSolution(id: string): Promise<Solution> {
    const result: Solution = await prisma.solution.delete({
        where: {
            id
        },
    })

    return result
}

export async function deleteSolutionInStep(stepId: string): Promise<Solution> {
    const result: Solution = await prisma.solution.delete({
        where: {
            stepId
        },
    })

    return result
}