import { Language, Resource, Template } from "@prisma/client";
import { CourseDTO } from "./courses"
import { LessonRawDTO } from "./lessons";
import { StepRawDTO } from "./steps";


export interface Scenario{
    courses: CourseFullDTO[]
    languages: Language[]
}

interface CourseFullDTO extends CourseDTO{
    lessons: LessonFullDTO[]
    resources: Resource[]
}

interface LessonFullDTO extends LessonRawDTO{
    steps: StepFullDTO[]
}

interface StepFullDTO extends StepRawDTO{
    template?: Template
    solution?: Template
}