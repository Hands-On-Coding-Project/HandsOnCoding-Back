import express, { Router, Request, Response } from "express";
import { reset, defaultStep } from "../../services/testing";

const router: Router = express.Router();

router.route("/reset").post((req: Request, res: Response) => {
    reset()
    .then(()=>{
        res.sendStatus(204);
    })
    .catch((e)=>{
        res.status(400);
        res.send(e)
    })
});

router.route("/default").post((req: Request, res: Response) => {
    defaultStep()
    .then((v)=>{
        res.status(201);
        res.send(v)
    })
    .catch((e)=>{
        res.status(400);
        res.send(e)
    })
});

export { router as TestingRouter };