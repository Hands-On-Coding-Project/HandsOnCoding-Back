import express, { Request, Response, Router } from "express";
import { Test, TestRawDTO } from "../../models/test";
import { ErrorMessage } from "../../models/error";
import { createTestInStep, deleteTestInStep, getTestInStep, getTestsInStep, updateTestInStep } from "../../services/testsService";

const router: Router = express.Router({ mergeParams: true });

// GET
router.route("/").get((req: Request, res: Response<Test[] | ErrorMessage>) => {
    getTestsInStep(req.params.stepId)
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

router.route("/:testId").get((req: Request, res: Response<Test | ErrorMessage>) => {
    getTestInStep(req.params.stepId, req.params.testId)
        .then((v) => {
            if (!v) {
                res.status(404)
                const error: ErrorMessage = { type: "Not Found", data: `Item with id "${req.params.testId}" not found` }
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
})

// POST
router.route("/").post((req: Request<any, any, TestRawDTO>, res: Response<Test | ErrorMessage>) => {
    createTestInStep(req.params.stepId, req.body)
        .then((v) => {
            res.status(201)
            res.send(v)
        })
        .catch((e) => {
            res.status(400)
            const error: ErrorMessage = { type: "Request", data: e }
            res.send(error)
        })
})

// PUT
router.route("/:testId").put((req: Request<any, any, TestRawDTO>, res: Response<Test | ErrorMessage>) => {
    updateTestInStep(req.params.stepId, req.params.testId, req.body)
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
router.route("/:testId").delete((req: Request, res: Response<Test | ErrorMessage>) => {
    deleteTestInStep(req.params.stepId, req.params.testId)
        .then((v) => {
            res.status(200)
            res.send(v)
        })
        .catch((e) => {
            res.status(400)
            const error: ErrorMessage = { type: "Request", data: e }
            res.send(error)
        })
})

export { router as TestsRouter };