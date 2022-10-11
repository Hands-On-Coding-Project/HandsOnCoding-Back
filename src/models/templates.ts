import { Template } from "@prisma/client";

export interface TemplateRawDTO extends Omit<TemplateDTO, 'stepId'>{};

export interface TemplateDTO extends Omit<Template, 'id'>{};

export { Template };