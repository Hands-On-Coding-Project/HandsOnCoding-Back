"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1Router = void 0;
const express_1 = __importDefault(require("express"));
const stepsRouter_1 = require("./stepsRouter");
const solutionsRouter_1 = require("./solutionsRouter");
const templatesRouter_1 = require("./templatesRouter");
const testingRouter_1 = require("./testingRouter");
const lessonsRouter_1 = require("./lessonsRouter");
const router = express_1.default.Router();
exports.V1Router = router;
router.use("/solutions", solutionsRouter_1.SolutionsRouter);
router.use("/templates", templatesRouter_1.TemplatesRouter);
router.use("/steps", stepsRouter_1.StepsRouter);
router.use("/lessons", lessonsRouter_1.LessonsRouter);
if (process.env.NODE_ENV === 'test') {
    router.use("/testing", testingRouter_1.TestingRouter);
}
// Swagger
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_1 = require("../../utils/swagger");
const fs_1 = __importDefault(require("fs"));
const specs = (0, swagger_jsdoc_1.default)(swagger_1.swaggerJsDocOptions);
fs_1.default.writeFileSync('docs/swagger.json', JSON.stringify(specs));
router.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs, swagger_1.swaggerUIOptions));
//# sourceMappingURL=routes.js.map