import { Step } from "@prisma/client";
import express, {Router, Request, Response} from "express";
import { getSteps, getStep, createStep } from "../controllers/Step";

const router: Router = express.Router();

router.route("/").get((req: Request, res: Response) => {
  getSteps().then((v) => {
    res.send(v)
  })
});

router.route("/").post((req: Request, res: Response) => {
  createStep(req.body).then((v) => {
    res.send(v)
  })
});

router.route("/:id").get((req: Request, res: Response) => {
  getStep(req.params.id).then((v) => {
    res.send(v)
  })
});

router.route("/:id").put((req: Request, res: Response) => {
  res.send("ya casi!")
});

router.route("/:id").delete((req: Request, res: Response) => {
  res.send("ya casi!")
});

export {router as StepsRouter};