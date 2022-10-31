import { Language, LanguageDTO } from "./languages";
import { Course, CourseDTO } from "./courses";
import { Resource, ResourceRawDTO } from "./resources";
import { Lesson, LessonRawDTO } from "./lessons";
import { StepNested, StepRawDTO } from "./steps";
import { FileRawDTO } from "./file";

//Input
export interface ScenarioDTO{
    courses: CourseFullDTO[]
    languages: LanguageDTO[]
}

interface CourseFullDTO extends CourseDTO{
    lessons: LessonFullDTO[]
    resources: ResourceRawDTO[]
}

interface LessonFullDTO extends LessonRawDTO{
    steps: StepFullDTO[]
}

interface StepFullDTO extends StepRawDTO{
    template?: FileRawDTO
    solution?: FileRawDTO
}

//Output
export interface Scenario{
    languages: Language[]
    courses: CourseFull[]
}

interface CourseFull extends Course{
    lessons: LessonFull[]
    resources: Resource[]
}

interface LessonFull extends Lesson{
    steps: StepNested[]
}