"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepsRouter = void 0;
const express_1 = __importDefault(require("express"));
const steps_1 = require("../../services/steps");
const router = express_1.default.Router();
exports.StepsRouter = router;
// GET
router.route("/").get((req, res) => {
    (0, steps_1.getSteps)()
        .then((v) => {
        res.status(200);
        res.send(v);
    })
        .catch((e) => {
        res.status(400);
        res.send(e);
    });
});
router.route("/:id").get((req, res) => {
    (0, steps_1.getStep)(req.params.id)
        .then((v) => {
        res.status(200);
        res.send(v);
    })
        .catch((e) => {
        res.status(400);
        res.send(e);
    });
});
// POST
router.route("/").post((req, res) => {
    (0, steps_1.createStep)(req.body)
        .then((v) => {
        res.status(201);
        res.send(v);
    })
        .catch((e) => {
        res.status(400);
        res.send(e);
    });
});
// PUT
router.route("/:id").put((req, res) => {
    (0, steps_1.updateStep)(req.params.id, req.body)
        .then((v) => {
        res.status(200);
        res.send(v);
    })
        .catch((e) => {
        console.log(e);
        res.status(400);
        res.send(e);
    });
});
// DELETE
router.route("/:id").delete((req, res) => {
    (0, steps_1.deleteStep)(req.params.id)
        .then((v) => {
        res.status(204);
        res.send(v);
    })
        .catch((e) => {
        res.status(400);
        res.send(e);
    });
});
//# sourceMappingURL=steps.js.map