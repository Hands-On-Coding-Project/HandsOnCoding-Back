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
exports.deleteTemplate = exports.updateTemplate = exports.createTemplate = exports.getTemplate = exports.getTemplates = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
function getTemplates() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma_1.default.template.findMany();
        return result;
    });
}
exports.getTemplates = getTemplates;
function getTemplate(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma_1.default.template.findUnique({
            where: {
                id
            },
        });
        return result;
    });
}
exports.getTemplate = getTemplate;
function createTemplate(template) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma_1.default.template.create({
            data: template,
        });
        return result;
    });
}
exports.createTemplate = createTemplate;
function updateTemplate(id, template) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma_1.default.template.update({
            where: {
                id
            },
            data: template,
        });
        return result;
    });
}
exports.updateTemplate = updateTemplate;
function deleteTemplate(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma_1.default.template.delete({
            where: {
                id
            },
        });
        return result;
    });
}
exports.deleteTemplate = deleteTemplate;
//# sourceMappingURL=templates.js.map