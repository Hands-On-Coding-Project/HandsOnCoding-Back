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
    res.status(400)
    res.send(e)
  })
});

router.route("/:id").get((req: Request, res: Response) => {
  getStep(req.params.id)
  .then((v) => {
    res.status(200)
    res.send(v)
  })
  .catch((e)=>{
    res.status(400)
    res.send(e)
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
    res.status(400)
    res.send(e)
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
    console.log(e)
    res.status(400)
    res.send(e)
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
    res.status(400)
    res.send(e)
  })
});

export {router as StepsRouter};