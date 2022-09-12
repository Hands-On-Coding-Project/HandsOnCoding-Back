import express, { Router, Request, Response } from "express";
import { reset, defaultStep } from "../../services/testing";

const router: Router = express.Router();

/**
 * @swagger
 * tags:
 *  name: Testing
 *  description: Testing endpoint. Methods only available in the testing environment.
 */

/**
 * @swagger
 * /testing/reset:
 *  post:
 *    summary: Clear all the tables/documents on the database.
 *    tags: [Testing]
 *    responses:
 *      204:
 *        description: The entire database is clear.
 *      400:
 *        description: An error occurred due to a bad request.
 */
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

/**
 * @swagger
 * /testing/default:
 *  post:
 *    summary: Create a default structure for the entire database.
 *    tags: [Testing]
 *    responses:
 *      204:
 *        description: The structure has been generated.
 *      400:
 *        description: An error occurred due to a bad request.
 */
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