import express, { Request, Response, Router } from "express";
import { deleteTemplateInStep, getTemplateInStep, upsertTemplateInStep } from "../../services/templatesService";
import { File, FileRawDTO } from "../../models/file";
import { ErrorMessage } from "../../models/error"

const router: Router = express.Router({mergeParams:true});

// GET
router.route("/").get((req: Request, res: Response<File | ErrorMessage>) => {
    getTemplateInStep(req.params.stepId)
        .then((v) => {
            if (!v) {
                res.status(404)
                const error: ErrorMessage = { type: "Not Found", data: `Item with id "${req.params.stepId}" not found` }
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
router.route("/").post((req: Request<any, any, FileRawDTO>, res: Response<File | ErrorMessage>) => {
    upsertTemplateInStep(req.params.stepId, req.body)
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

// DELETE
router.route("/").delete((req: Request, res: Response<File | ErrorMessage>) => {
    deleteTemplateInStep(req.params.stepId)
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

export { router as TemplatesRouter };