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
exports.deleteTemplateInStep = exports.deleteTemplate = exports.updateTemplate = exports.createTemplate = exports.upsertTemplateInStep = exports.getTemplateInStep = exports.getTemplate = exports.getTemplates = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
// Find
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
function getTemplateInStep(stepId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma_1.default.template.findUnique({
            where: {
                stepId
            },
        });
        return result;
    });
}
exports.getTemplateInStep = getTemplateInStep;
// Upsert
function upsertTemplateInStep(stepId, template) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma_1.default.template.upsert({
            where: {
                stepId
            },
            update: template,
            create: Object.assign(Object.assign({}, template), { step: {
                    connect: {
                        id: stepId
                    }
                } })
        });
        return result;
    });
}
exports.upsertTemplateInStep = upsertTemplateInStep;
// Create
function createTemplate(template) {
    return __awaiter(this, void 0, void 0, function* () {
        const { stepId } = template, templateInfo = __rest(template, ["stepId"]);
        const result = yield prisma_1.default.template.create({
            data: Object.assign(Object.assign({}, templateInfo), { step: {
                    connect: {
                        id: stepId
                    }
                } })
        });
        return result;
    });
}
exports.createTemplate = createTemplate;
// Update
function updateTemplate(id, template) {
    return __awaiter(this, void 0, void 0, function* () {
        const { stepId } = template, templateInfo = __rest(template, ["stepId"]);
        const result = yield prisma_1.default.template.update({
            where: {
                id
            },
            data: Object.assign(Object.assign({}, templateInfo), { step: {
                    connect: {
                        id: stepId
                    }
                } }),
        });
        return result;
    });
}
exports.updateTemplate = updateTemplate;
// Delete
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
function deleteTemplateInStep(stepId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma_1.default.template.delete({
            where: {
                stepId
            },
        });
        return result;
    });
}
exports.deleteTemplateInStep = deleteTemplateInStep;
//# sourceMappingURL=templatesService.js.map