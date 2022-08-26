import express, {Router, Request, Response} from "express";
import { getTemplates, getTemplate, createTemplate, updateTemplate, deleteTemplate } from "../../services/templates";

const router: Router = express.Router();

// GET
router.route("/").get((req: Request, res: Response) => {
  getTemplates()
  .then((v) => {
    res.status(200)
    res.send(v)
  })
  .catch((e) => {
    res.sendStatus(400)
  })
});

router.route("/:id").get((req: Request, res: Response) => {
  getTemplate(req.params.id)
  .then((v) => {
    res.status(200)
    res.send(v)
  })
  .catch((e)=>{
    res.sendStatus(400)
  })
});

// POST
router.route("/").post((req: Request, res: Response) => {
  createTemplate(req.body)
  .then((v) => {
    res.status(201)
    res.send(v)
  })
  .catch((e) => {
    res.sendStatus(400)
  })
});

// PUT
router.route("/:id").put((req: Request, res: Response) => {
  updateTemplate(req.params.id,req.body)
  .then((v) => {
    res.status(200)
    res.send(v)
  })
  .catch((e) => {
    res.sendStatus(400)
  })
});

// DELETE
router.route("/:id").delete((req: Request, res: Response) => {
  deleteTemplate(req.params.id)
  .then((v) => {
    res.status(204)
    res.send(v)
  })
  .catch((e) => {
    res.sendStatus(400)
  })
});

export {router as TemplatesRouter};