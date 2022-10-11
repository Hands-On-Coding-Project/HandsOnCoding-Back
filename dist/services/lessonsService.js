"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLesson = exports.updateLesson = exports.createLesson = exports.getLesson = exports.getLessons = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
// Find
function getLessons() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma_1.default.lesson.findMany();
        return result;
    });
}
exports.getLessons = getLessons;
function getLesson(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma_1.default.lesson.findUnique({
            where: {
                id
            },
            include: {
                steps: true
            }
        });
        return result;
    });
}
exports.getLesson = getLesson;
// Create
function createLesson(lesson) {
    return __awaiter(this, void 0, void 0, function* () {
        const { languageName, courseId } = lesson, lessonInfo = __rest(lesson, ["languageName", "courseId"]);
        const result = yield prisma_1.default.lesson.create({
            data: Object.assign(Object.assign({}, lessonInfo), { course: {
                    connect: {
                        id: courseId
                    }
                }, language: {
                    connect: {
                        name: languageName
                    }
                } })
        });
        return result;
    });
}
exports.createLesson = createLesson;
// Update
function updateLesson(id, lesson) {
    return __awaiter(this, void 0, void 0, function* () {
        const { languageName, courseId } = lesson, lessonInfo = __rest(lesson, ["languageName", "courseId"]);
        const result = yield prisma_1.default.lesson.update({
            where: {
                id
            },
            data: Object.assign(Object.assign({}, lessonInfo), { course: {
                    connect: {
                        id: courseId
                    }
                }, language: {
                    connect: {
                        name: languageName
                    }
                } })
        });
        return result;
    });
}
exports.updateLesson = updateLesson;
// Delete
function deleteLesson(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma_1.default.lesson.delete({
            where: {
                id
            }
        });
        return result;
    });
}
exports.deleteLesson = deleteLesson;
//# sourceMappingURL=lessonsService.js.map