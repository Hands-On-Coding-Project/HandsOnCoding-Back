"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepsRouter = void 0;
const express_1 = __importDefault(require("express"));
const stepsService_1 = require("../../services/stepsService");
const templatesService_1 = require("../../services/templatesService");
const solutionsService_1 = require("../../services/solutionsService");
// # 1 Level
const router = express_1.default.Router();
exports.StepsRouter = router;
/**
 * @swagger
 * components:
 *  parameters:
 *    stepId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: The step id.
 *
 * tags:
 *  name: Steps
 *  description: Steps endpoint.
 */
// GET
/**
 * @swagger
 * /steps:
 *  get:
 *    summary: Get all steps.
 *    tags: [Steps]
 *    responses:
 *      200:
 *        description: All the steps.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Step'
 *      400:
 *        description: An error occurred due to a bad request.
 */
router.route("/").get((req, res) => {
    (0, stepsService_1.getSteps)()
        .then((v) => {
        res.status(200);
        res.send(v);
    })
        .catch((e) => {
        res.status(400);
        const error = { type: "Request", data: e };
        res.send(error);
    });
});
/**
 * @swagger
 * /steps/{id}:
 *  get:
 *    summary: Get a step by id.
 *    tags: [Steps]
 *    parameters:
 *      - $ref: '#/components/parameters/stepId'
 *    responses:
 *      200:
 *        description: The step with it solution and template.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/StepNested'
 *      204:
 *        description: The step can not be found.
 *      400:
 *        description: An error occurred due to a bad request.
 */
router.route("/:id").get((req, res) => {
    (0, stepsService_1.getStep)(req.params.id)
        .then((v) => {
        if (!v) {
            res.status(404);
            const error = { type: "Not Found", data: `Item with id "${req.params.id}" not found` };
            res.send(error);
        }
        else {
            res.status(200);
            res.send(v);
        }
    })
        .catch((e) => {
        res.status(400);
        const error = { type: "Request", data: e };
        res.send(error);
    });
});
// POST
/**
 * @swagger
 * /steps:
 *  post:
 *    summary: Create a step.
 *    tags: [Steps]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/StepDTO'
 *    responses:
 *      201:
 *        description: The created step.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Step'
 *      400:
 *        description: An error occurred due to a bad request.
 */
router.route("/").post((req, res) => {
    (0, stepsService_1.createStep)(req.body)
        .then((v) => {
        res.status(201);
        res.send(v);
    })
        .catch((e) => {
        res.status(400);
        const error = { type: "Request", data: e };
        res.send(error);
    });
});
// PUT
/**
 * @swagger
 * /steps/{id}:
 *  put:
 *    summary: Update a step by id.
 *    tags: [Steps]
 *    parameters:
 *      - $ref: '#/components/parameters/stepId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/StepDTO'
 *    responses:
 *      200:
 *        description: The updated step.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Step'
 *      400:
 *        description: An error occurred due to a bad request.
 */
router.route("/:id").put((req, res) => {
    (0, stepsService_1.updateStep)(req.params.id, req.body)
        .then((v) => {
        res.status(200);
        res.send(v);
    })
        .catch((e) => {
        res.status(400);
        const error = { type: "Request", data: e };
        res.send(error);
    });
});
// DELETE
/**
 * @swagger
 * /steps/{id}:
 *  delete:
 *    summary: Delete a step by id.
 *    tags: [Steps]
 *    parameters:
 *      - $ref: '#/components/parameters/stepId'
 *    responses:
 *      200:
 *        description: The deleted step.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Step'
 *      400:
 *        description: An error occurred due to a bad request.
 */
router.route("/:id").delete((req, res) => {
    (0, stepsService_1.deleteStep)(req.params.id)
        .then((v) => {
        res.status(200);
        res.send(v);
    })
        .catch((e) => {
        res.status(400);
        const error = { type: "Request", data: e };
        res.send(error);
    });
});
// # 2 Level
// ## Template
const templateRouter = express_1.default.Router({ mergeParams: true });
router.use("/:id/template", templateRouter);
// GET
templateRouter.route("/").get((req, res) => {
    (0, templatesService_1.getTemplateInStep)(req.params.id)
        .then((v) => {
        if (!v) {
            res.status(404);
            const error = { type: "Not Found", data: `Item with id "${req.params.id}" not found` };
            res.send(error);
        }
        else {
            res.status(200);
            res.send(v);
        }
    })
        .catch((e) => {
        res.status(400);
        const error = { type: "Request", data: e };
        res.send(error);
    });
});
// POST
templateRouter.route("/").post((req, res) => {
    (0, templatesService_1.upsertTemplateInStep)(req.params.id, req.body)
        .then((v) => {
        res.status(201);
        res.send(v);
    })
        .catch((e) => {
        res.status(400);
        const error = { type: "Request", data: e };
        res.send(error);
    });
});
// DELETE
templateRouter.route("/").delete((req, res) => {
    (0, templatesService_1.deleteTemplateInStep)(req.params.id)
        .then((v) => {
        res.status(200);
        res.send(v);
    })
        .catch((e) => {
        res.status(400);
        const error = { type: "Request", data: e };
        res.send(error);
    });
});
// ## Solution
const solutionRouter = express_1.default.Router({ mergeParams: true });
router.use("/:id/solution", solutionRouter);
// GET
solutionRouter.route("/").get((req, res) => {
    (0, solutionsService_1.getSolutionInStep)(req.params.id)
        .then((v) => {
        if (!v) {
            res.status(404);
            const error = { type: "Not Found", data: `Item with id "${req.params.id}" not found` };
            res.send(error);
        }
        else {
            res.status(200);
            res.send(v);
        }
    })
        .catch((e) => {
        res.status(400);
        const error = { type: "Request", data: e };
        res.send(error);
    });
});
// POST
solutionRouter.route("/").post((req, res) => {
    (0, solutionsService_1.upsertSolutionInStep)(req.params.id, req.body)
        .then((v) => {
        res.status(201);
        res.send(v);
    })
        .catch((e) => {
        res.status(400);
        const error = { type: "Request", data: e };
        res.send(error);
    });
});
// DELETE
solutionRouter.route("/").delete((req, res) => {
    (0, solutionsService_1.deleteSolutionInStep)(req.params.id)
        .then((v) => {
        res.status(200);
        res.send(v);
    })
        .catch((e) => {
        res.status(400);
        const error = { type: "Request", data: e };
        res.send(error);
    });
});
//# sourceMappingURL=stepsRouter.js.map