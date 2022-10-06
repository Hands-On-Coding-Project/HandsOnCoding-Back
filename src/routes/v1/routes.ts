import express, { Router } from "express";

import { StepsRouter } from "./steps";
import { SolutionsRouter } from './solutions'
import { TemplatesRouter } from './templates'
import { TestingRouter } from './testing'
import { LessonsRouter } from './lessons'
import { resourceLimits } from "worker_threads";

const router: Router = express.Router();

router.use("/solutions", SolutionsRouter);
router.use("/templates", TemplatesRouter);
router.use("/steps", StepsRouter);
router.use("/lessons", LessonsRouter);
if(process.env.NODE_ENV === 'test'){
    router.use("/testing", TestingRouter);
}

// Swagger
import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import {swaggerJsDocOptions, swaggerUIOptions} from '../../utils/swaggerOptions'

const specs = swaggerJsDoc(swaggerJsDocOptions)

router.use('/docs', swaggerUI.serve, swaggerUI.setup(specs,swaggerUIOptions))
// ...

export {router as V1Router}