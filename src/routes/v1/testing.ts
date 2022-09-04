import express, { Router, Request, Response } from "express";
import { reset } from "../../services/testing";

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

export { router as TestingRouter };