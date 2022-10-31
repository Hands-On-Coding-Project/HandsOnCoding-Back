import express, { Request, Response, Router } from "express";
import { deleteTemplateInStep, getTemplateInStep, upsertTemplateInStep } from "../../services/templatesService";
import { File, FileRawDTO } from "../../models/file";
import { Error } from "../../models/error"

const router: Router = express.Router({mergeParams:true});

// GET
router.route("/").get((req: Request, res: Response<File | Error>) => {
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
router.route("/").post((req: Request<any, any, FileRawDTO>, res: Response<File | Error>) => {
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
router.route("/").delete((req: Request, res: Response<File | Error>) => {
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

export { router as TemplatesRouter };