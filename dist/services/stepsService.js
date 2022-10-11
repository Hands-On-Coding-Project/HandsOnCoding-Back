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
exports.deleteStep = exports.updateStep = exports.createStepInLesson = exports.createStep = exports.getStep = exports.getStepsInLesson = exports.getSteps = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
// Find
function getSteps() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma_1.default.step.findMany();
        return result;
    });
}
exports.getSteps = getSteps;
function getStepsInLesson(lessonId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma_1.default.step.findMany({
            where: {
                lessonId
            }
        });
        return result;
    });
}
exports.getStepsInLesson = getStepsInLesson;
function getStep(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma_1.default.step.findUnique({
            where: {
                id
            },
            include: {
                template: true,
                solution: true,
            }
        });
        return result;
    });
}
exports.getStep = getStep;
// Create
function createStep(step) {
    return __awaiter(this, void 0, void 0, function* () {
        const { lessonId } = step, stepInfo = __rest(step, ["lessonId"]);
        return createStepInLesson(lessonId, stepInfo);
    });
}
exports.createStep = createStep;
function createStepInLesson(lessonId, step) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma_1.default.step.create({
            data: Object.assign(Object.assign({}, step), { lesson: {
                    connect: {
                        id: lessonId
                    }
                } })
        });
        return result;
    });
}
exports.createStepInLesson = createStepInLesson;
// Update
function updateStep(id, step) {
    return __awaiter(this, void 0, void 0, function* () {
        const { lessonId } = step, stepInfo = __rest(step, ["lessonId"]);
        const result = yield prisma_1.default.step.update({
            where: {
                id
            },
            data: Object.assign(Object.assign({}, stepInfo), { lesson: {
                    connect: {
                        id: lessonId
                    }
                } })
        });
        return result;
    });
}
exports.updateStep = updateStep;
function deleteStep(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma_1.default.step.delete({
            where: {
                id
            }
        });
        return result;
    });
}
exports.deleteStep = deleteStep;
//# sourceMappingURL=stepsService.js.map