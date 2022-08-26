import express, { Router } from "express";

import { StepsRouter } from "./steps";
import { SolutionsRouter } from './solutions'
import { TemplatesRouter } from './templates'

const router: Router = express.Router();

router.use("/steps", StepsRouter);
router.use("/solutions", SolutionsRouter);
router.use("/templates", TemplatesRouter);

export {router as V1Router}