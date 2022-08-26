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
exports.createStep = exports.getSteps = exports.getStep = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
function getSteps() {
    return __awaiter(this, void 0, void 0, function* () {
        const steps = yield prisma_1.default.step.findMany();
        return steps;
    });
}
exports.getSteps = getSteps;
function getStep(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const step = yield prisma_1.default.step.findUnique({
            where: {
                id
            },
        });
        return step;
    });
}
exports.getStep = getStep;
function createStep(step) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield ((_a = prisma_1.default.step) === null || _a === void 0 ? void 0 : _a.create({
            data: {
                description: step.description,
            },
        }));
    });
}
exports.createStep = createStep;
//# sourceMappingURL=Step.js.map