import prisma from "../utils/prisma"
import { Language } from "../models/language"

// Find
export async function getLanguages(): Promise<Language[]> {
    const result: Language[] = await prisma.language.findMany()

    return result
}