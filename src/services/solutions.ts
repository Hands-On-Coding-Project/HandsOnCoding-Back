import { Solution } from "@prisma/client";
import prisma from "../utils/prisma";

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

export async function createSolution(solution: Solution): Promise<Solution> {
    const result: Solution = await prisma.solution.create({
        data: solution,
    })

    return result
}

export async function updateSolution(id: string, solution: Solution): Promise<Solution> {
    const result: Solution = await prisma.solution.update({
        where: {
            id
        },
        data: solution,
    })

    return result
}

export async function deleteSolution(id: string): Promise<Solution> {
    const result: Solution = await prisma.solution.delete({
        where: {
            id
        },
    })

    return result
}