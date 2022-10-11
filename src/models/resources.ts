import { Resource } from "@prisma/client";

export interface ResourceRawDTO extends Omit<ResourceDTO, 'courseId'>{};

export interface ResourceDTO extends Omit<Resource, 'id'>{};

export { Resource };