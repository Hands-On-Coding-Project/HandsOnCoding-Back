"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepsRouter = void 0;
const express_1 = __importDefault(require("express"));
const Step_1 = require("../controllers/Step");
const router = express_1.default.Router();
exports.StepsRouter = router;
router.route("/").get((req, res) => {
    (0, Step_1.getSteps)().then((v) => {
        res.send(v);
    });
});
router.route("/").post((req, res) => {
    (0, Step_1.createStep)(req.body).then((v) => {
        res.send(v);
    });
});
router.route("/:id").get((req, res) => {
    (0, Step_1.getStep)(req.params.id).then((v) => {
        res.send(v);
    });
});
router.route("/:id").put((req, res) => {
    res.send("ya casi!");
});
router.route("/:id").delete((req, res) => {
    res.send("ya casi!");
});
//# sourceMappingURL=steps.js.map