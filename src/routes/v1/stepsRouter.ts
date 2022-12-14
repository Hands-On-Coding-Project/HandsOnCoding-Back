import express, { Router, Request, Response } from "express";
import { Step, StepDTO, StepNested } from "../../models/step";
import { ErrorMessage } from "../../models/error";
import { getSteps, getStep, createStep, updateStep, deleteStep } from "../../services/stepsService";
import { TemplatesRouter } from "./templatesRouter";
import { SolutionsRouter } from "./solutionsRouter";
import { TestsRouter } from "./testsRouter";

// # 1 Level
const router: Router = express.Router();

interface stepQuery{
  force?: boolean
}

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
router.route("/").get((req: Request, res: Response<Step[] | ErrorMessage>) => {
  getSteps()
    .then((v) => {
      res.status(200)
      res.send(v)
    })
    .catch((e) => {
      res.status(400)
      const error: ErrorMessage = { type: "Request", data: e }
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
router.route("/:stepId").get((req: Request, res: Response<StepNested | ErrorMessage>) => {
  getStep(req.params.stepId)
    .then((v) => {
      if (!v) {
        res.status(404)
        const error: ErrorMessage = { type: "Not Found", data: `Item with id "${req.params.id}" not found` }
        res.send(error)
      }
      else {
        res.status(200)
        res.send(v)
      }
    })
    .catch((e) => {
      res.status(400)
      const error: ErrorMessage = { type: "Request", data: e }
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
router.route("/").post((req: Request<any, any, StepDTO>, res: Response<Step | ErrorMessage>) => {
  createStep(req.body)
    .then((v) => {
      res.status(201)
      res.send(v)
    })
    .catch((e) => {
      res.status(400)
      const error: ErrorMessage = { type: "Request", data: e }
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
router.route("/:stepId").put((req: Request<any, any, StepDTO>, res: Response<Step | ErrorMessage>) => {
  updateStep(req.params.stepId, req.body)
    .then((v) => {
      res.status(200)
      res.send(v)
    })
    .catch((e) => {
      res.status(400)
      const error: ErrorMessage = { type: "Request", data: e }
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
router.route("/:stepId").delete((req: Request<any, any, any, stepQuery>, res: Response<Step | ErrorMessage>) => {
  deleteStep(req.params.stepId, req.query.force)
    .then((v) => {
      res.status(200)
      res.send(v)
    })
    .catch((e) => {
      res.status(400)
      const error: ErrorMessage = { type: "Request", data: e }
      res.send(error)
    })
});

// # 2 Level
// ## Template
router.use("/:stepId/template", TemplatesRouter);

// ## Solution
router.use("/:stepId/solution", SolutionsRouter);

// ## Tests
router.use("/:stepId/tests", TestsRouter);

export { router as StepsRouter };