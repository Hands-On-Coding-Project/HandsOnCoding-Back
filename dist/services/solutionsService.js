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
exports.deleteSolutionInStep = exports.deleteSolution = exports.updateSolution = exports.createSolution = exports.upsertSolutionInStep = exports.getSolutionInStep = exports.getSolution = exports.getSolutions = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
// Find
function getSolutions() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma_1.default.solution.findMany();
        return result;
    });
}
exports.getSolutions = getSolutions;
function getSolution(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma_1.default.solution.findUnique({
            where: {
                id
            },
        });
        return result;
    });
}
exports.getSolution = getSolution;
function getSolutionInStep(stepId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma_1.default.solution.findUnique({
            where: {
                stepId
            },
        });
        return result;
    });
}
exports.getSolutionInStep = getSolutionInStep;
// Upsert
function upsertSolutionInStep(stepId, solution) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma_1.default.solution.upsert({
            where: {
                stepId
            },
            update: solution,
            create: Object.assign(Object.assign({}, solution), { step: {
                    connect: {
                        id: stepId
                    }
                } })
        });
        return result;
    });
}
exports.upsertSolutionInStep = upsertSolutionInStep;
// Create
function createSolution(solution) {
    return __awaiter(this, void 0, void 0, function* () {
        const { stepId } = solution, solutionInfo = __rest(solution, ["stepId"]);
        const result = yield prisma_1.default.solution.create({
            data: Object.assign(Object.assign({}, solutionInfo), { step: {
                    connect: {
                        id: stepId
                    }
                } }),
        });
        return result;
    });
}
exports.createSolution = createSolution;
// Update
function updateSolution(id, solution) {
    return __awaiter(this, void 0, void 0, function* () {
        const { stepId } = solution, solutionInfo = __rest(solution, ["stepId"]);
        const result = yield prisma_1.default.solution.update({
            where: {
                id
            },
            data: Object.assign(Object.assign({}, solutionInfo), { step: {
                    connect: {
                        id: stepId
                    }
                } }),
        });
        return result;
    });
}
exports.updateSolution = updateSolution;
// Delete
function deleteSolution(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma_1.default.solution.delete({
            where: {
                id
            },
        });
        return result;
    });
}
exports.deleteSolution = deleteSolution;
function deleteSolutionInStep(stepId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma_1.default.solution.delete({
            where: {
                stepId
            },
        });
        return result;
    });
}
exports.deleteSolutionInStep = deleteSolutionInStep;
//# sourceMappingURL=solutionsService.js.map