import { Course } from "@prisma/client";
import { Lesson } from "./lessons"
import { Resource } from "./resources"

export interface CourseDTO extends Omit<Course, 'id'>{};

export { Course };

export interface CourseNested extends Course{
    lessons: Lesson[]
    resources: Resource[]
}