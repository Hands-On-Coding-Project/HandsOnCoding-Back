"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterV1 = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.RouterV1 = router;
router.route("/").get((req, res) => {
    res.send(`Hello from ${req.baseUrl}`);
});
//# sourceMappingURL=routes.js.map