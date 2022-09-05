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
exports.deleteStep = exports.updateStep = exports.createStep = exports.getStep = exports.getSteps = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
function getSteps() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma_1.default.step.findMany();
        return result;
    });
}
exports.getSteps = getSteps;
function getStep(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma_1.default.step.findUnique({
            where: {
                id
            },
            include: {
                template: true,
                solution: true,
            },
        });
        return result;
    });
}
exports.getStep = getStep;
function createStep(nestedStep) {
    return __awaiter(this, void 0, void 0, function* () {
        const step = nestedStep;
        const template = nestedStep.template;
        const solution = nestedStep.solution;
        const result = yield prisma_1.default.step.create({
            data: Object.assign(Object.assign({}, step), { template: {
                    create: template
                }, solution: {
                    create: solution
                } })
        });
        return result;
    });
}
exports.createStep = createStep;
function updateStep(id, nestedStep) {
    return __awaiter(this, void 0, void 0, function* () {
        const step = nestedStep;
        const template = nestedStep.template;
        const solution = nestedStep.solution;
        const result = yield prisma_1.default.step.update({
            where: {
                id
            },
            data: Object.assign(Object.assign({}, step), { template: {
                    delete: true,
                    create: template
                }, solution: {
                    delete: true,
                    create: solution
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
//# sourceMappingURL=steps.js.map