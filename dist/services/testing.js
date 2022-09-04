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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reset = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
function reset() {
    return __awaiter(this, void 0, void 0, function* () {
        const deleteTemplates = prisma_1.default.template.deleteMany();
        const deleteSolutions = prisma_1.default.solution.deleteMany();
        const deleteSteps = prisma_1.default.step.deleteMany();
        const deleteLessons = prisma_1.default.lesson.deleteMany();
        const deleteLanguages = prisma_1.default.language.deleteMany();
        const deleteResources = prisma_1.default.resource.deleteMany();
        const deleteCourses = prisma_1.default.course.deleteMany();
        yield prisma_1.default.$transaction([deleteTemplates, deleteSolutions, deleteSteps, deleteLessons, deleteLanguages, deleteResources, deleteCourses]);
    });
}
exports.reset = reset;
//# sourceMappingURL=testing.js.map