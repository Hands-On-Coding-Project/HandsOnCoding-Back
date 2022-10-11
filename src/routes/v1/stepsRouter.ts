import express, { Router, Request, Response } from "express";
import { Step, StepDTO, StepNested } from "../../models/steps";
import { Template, TemplateRawDTO } from "../../models/templates";
import { Solution, SolutionRawDTO } from "../../models/solutions";
import { Error } from "../../models/error";
import { getSteps, getStep, createStep, updateStep, deleteStep } from "../../services/stepsService";
import { deleteTemplateInStep, getTemplateInStep, upsertTemplateInStep } from "../../services/templatesService";
import { getSolutionInStep, upsertSolutionInStep, deleteSolutionInStep } from "../../services/solutionsService";

// # 1 Level
const router: Router = express.Router();

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
router.route("/").get((req: Request, res: Response<Step[] | Error>) => {
  getSteps()
    .then((v) => {
      res.status(200)
      res.send(v)
    })
    .catch((e) => {
      res.status(400)
      const error: Error = { type: "Request", data: e }
      res.send(error)
    })
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
router.route("/:id").get((req: Request, res: Response<StepNested | Error>) => {
  getStep(req.params.id)
    .then((v) => {
      if (!v) {
        res.status(404)
        const error: Error = { type: "Not Found", data: `Item with id "${req.params.id}" not found` }
        res.send(error)
      }
      else {
        res.status(200)
        res.send(v)
      }
    })
    .catch((e) => {
      res.status(400)
      const error: Error = { type: "Request", data: e }
      res.send(error)
    })
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
router.route("/").post((req: Request<any, any, StepDTO>, res: Response<Step | Error>) => {
  createStep(req.body)
    .then((v) => {
      res.status(201)
      res.send(v)
    })
    .catch((e) => {
      res.status(400)
      const error: Error = { type: "Request", data: e }
      res.send(error)
    })
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
router.route("/:id").put((req: Request<any, any, StepDTO>, res: Response<Step | Error>) => {
  updateStep(req.params.id, req.body)
    .then((v) => {
      res.status(200)
      res.send(v)
    })
    .catch((e) => {
      res.status(400)
      const error: Error = { type: "Request", data: e }
      res.send(error)
    })
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
router.route("/:id").delete((req: Request, res: Response<Step | Error>) => {
  deleteStep(req.params.id)
    .then((v) => {
      res.status(200)
      res.send(v)
    })
    .catch((e) => {
      res.status(400)
      const error: Error = { type: "Request", data: e }
      res.send(error)
    })
});

// # 2 Level
// ## Template
const templateRouter: Router = express.Router({mergeParams:true});
router.use("/:id/template", templateRouter);

// GET
templateRouter.route("/").get((req: Request, res: Response<Template | Error>) => {
  getTemplateInStep(req.params.id)
    .then((v) => {
      if (!v) {
        res.status(404)
        const error: Error = { type: "Not Found", data: `Item with id "${req.params.id}" not found` }
        res.send(error)
      }
      else {
        res.status(200)
        res.send(v)
      }
    })
    .catch((e) => {
      res.status(400)
      const error: Error = { type: "Request", data: e }
      res.send(error)
    })
})

// POST
templateRouter.route("/").post((req: Request<any, any, TemplateRawDTO>, res: Response<Template | Error>) => {
  upsertTemplateInStep(req.params.id, req.body)
    .then((v) => {
      res.status(201)
      res.send(v)
    })
    .catch((e) => {
      res.status(400)
      const error: Error = { type: "Request", data: e }
      res.send(error)
    })
})

// DELETE
templateRouter.route("/").delete((req: Request, res: Response<Template | Error>) => {
  deleteTemplateInStep(req.params.id)
    .then((v) => {
      res.status(200)
      res.send(v)
    })
    .catch((e) => {
      res.status(400)
      const error: Error = { type: "Request", data: e }
      res.send(error)
    })
})

// ## Solution
const solutionRouter: Router = express.Router({mergeParams:true});
router.use("/:id/solution", solutionRouter);

// GET
solutionRouter.route("/").get((req: Request, res: Response<Solution | Error>) => {
  getSolutionInStep(req.params.id)
    .then((v) => {
      if (!v) {
        res.status(404)
        const error: Error = { type: "Not Found", data: `Item with id "${req.params.id}" not found` }
        res.send(error)
      }
      else {
        res.status(200)
        res.send(v)
      }
    })
    .catch((e) => {
      res.status(400)
      const error: Error = { type: "Request", data: e }
      res.send(error)
    })
})

// POST
solutionRouter.route("/").post((req: Request<any, any, SolutionRawDTO>, res: Response<Solution | Error>) => {
  upsertSolutionInStep(req.params.id, req.body)
    .then((v) => {
      res.status(201)
      res.send(v)
    })
    .catch((e) => {
      res.status(400)
      const error: Error = { type: "Request", data: e }
      res.send(error)
    })
})

// DELETE
solutionRouter.route("/").delete((req: Request, res: Response<Solution | Error>) => {
  deleteSolutionInStep(req.params.id)
    .then((v) => {
      res.status(200)
      res.send(v)
    })
    .catch((e) => {
      res.status(400)
      const error: Error = { type: "Request", data: e }
      res.send(error)
    })
})

export { router as StepsRouter };