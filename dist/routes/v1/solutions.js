"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolutionsRouter = void 0;
const express_1 = __importDefault(require("express"));
const solutions_1 = require("../../services/solutions");
const router = express_1.default.Router();
exports.SolutionsRouter = router;
// GET
router.route("/").get((req, res) => {
    (0, solutions_1.getSolutions)()
        .then((v) => {
        res.status(200);
        res.send(v);
    })
        .catch((e) => {
        res.sendStatus(400);
    });
});
router.route("/:id").get((req, res) => {
    (0, solutions_1.getSolution)(req.params.id)
        .then((v) => {
        res.status(200);
        res.send(v);
    })
        .catch((e) => {
        res.sendStatus(400);
    });
});
// POST
router.route("/").post((req, res) => {
    (0, solutions_1.createSolution)(req.body)
        .then((v) => {
        res.status(201);
        res.send(v);
    })
        .catch((e) => {
        res.sendStatus(400);
    });
});
// PUT
router.route("/:id").put((req, res) => {
    (0, solutions_1.updateSolution)(req.params.id, req.body)
        .then((v) => {
        res.status(200);
        res.send(v);
    })
        .catch((e) => {
        res.sendStatus(400);
    });
});
// DELETE
router.route("/:id").delete((req, res) => {
    (0, solutions_1.deleteSolution)(req.params.id)
        .then((v) => {
        res.status(204);
        res.send(v);
    })
        .catch((e) => {
        res.sendStatus(400);
    });
});
//# sourceMappingURL=solutions.js.map