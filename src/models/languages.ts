import { Language } from "@prisma/client";

export interface LanguageDTO extends Omit<Language, 'id'>{};

export { Language };