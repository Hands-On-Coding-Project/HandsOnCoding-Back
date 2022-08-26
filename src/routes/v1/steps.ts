import express, {Router, Request, Response} from "express";
import { getSteps, getStep, createStep, updateStep, deleteStep } from "../../services/steps";

const router: Router = express.Router();

// GET
router.route("/").get((req: Request, res: Response) => {
  getSteps()
  .then((v) => {
    res.status(200)
    res.send(v)
  })
  .catch((e) => {
    res.sendStatus(400)
  })
});

router.route("/:id").get((req: Request, res: Response) => {
  getStep(req.params.id)
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
  createStep(req.body)
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
  updateStep(req.params.id,req.body)
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
  deleteStep(req.params.id)
  .then((v) => {
    res.status(204)
    res.send(v)
  })
  .catch((e) => {
    res.sendStatus(400)
  })
});

export {router as StepsRouter};