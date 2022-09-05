"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1Router = void 0;
const express_1 = __importDefault(require("express"));
const steps_1 = require("./steps");
const solutions_1 = require("./solutions");
const templates_1 = require("./templates");
const testing_1 = require("./testing");
const router = express_1.default.Router();
exports.V1Router = router;
// Not exposed
router.use("/solutions", solutions_1.SolutionsRouter);
router.use("/templates", templates_1.TemplatesRouter);
// Exposed
if (process.env.NODE_ENV === 'test') {
    console.log('Testing');
    router.use("/testing", testing_1.TestingRouter);
}
router.use("/steps", steps_1.StepsRouter);
//# sourceMappingURL=routes.js.map