import express, { Router } from "express";

import { StepsRouter } from "./steps";
import { SolutionsRouter } from './solutions'
import { TemplatesRouter } from './templates'
import { TestingRouter } from './testing'
import { resourceLimits } from "worker_threads";

const router: Router = express.Router();

// Not exposed
router.use("/solutions", SolutionsRouter);
router.use("/templates", TemplatesRouter);
// Exposed
if(process.env.NODE_ENV === 'test'){
    console.log('Testing')
    router.use("/testing", TestingRouter);
}
router.use("/steps", StepsRouter);


export {router as V1Router}