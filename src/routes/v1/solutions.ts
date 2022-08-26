import express, {Router, Request, Response} from "express";
import { getSolution, getSolutions, createSolution, updateSolution, deleteSolution } from "../../services/solutions";

const router: Router = express.Router();

// GET
router.route("/").get((req: Request, res: Response) => {
  getSolutions()
  .then((v) => {
    res.status(200)
    res.send(v)
  })
  .catch((e) => {
    res.sendStatus(400)
  })
});

router.route("/:id").get((req: Request, res: Response) => {
  getSolution(req.params.id)
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
  createSolution(req.body)
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
  updateSolution(req.params.id,req.body)
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
  deleteSolution(req.params.id)
  .then((v) => {
    res.status(204)
    res.send(v)
  })
  .catch((e) => {
    res.sendStatus(400)
  })
});

export {router as SolutionsRouter};