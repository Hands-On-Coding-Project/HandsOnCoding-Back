import { Template } from "@prisma/client";

export interface FileRawDTO extends Omit<FileDTO, 'stepId'>{};

export interface FileDTO extends Omit<File, 'id' | 'updatedAt'>{};

export interface File extends Template{};