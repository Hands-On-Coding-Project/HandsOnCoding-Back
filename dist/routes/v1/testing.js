"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestingRouter = void 0;
const express_1 = __importDefault(require("express"));
const testing_1 = require("../../services/testing");
const router = express_1.default.Router();
exports.TestingRouter = router;
router.route("/reset").post((req, res) => {
    (0, testing_1.reset)()
        .then(() => {
        res.sendStatus(204);
    })
        .catch((e) => {
        res.status(400);
        res.send(e);
    });
});
//# sourceMappingURL=testing.js.map