import { Solution } from "@prisma/client";

export interface SolutionRawDTO extends Omit<SolutionDTO, 'stepId'>{}

export interface SolutionDTO extends Omit<Solution, 'id' | 'updatedAt'>{};

export { Solution };