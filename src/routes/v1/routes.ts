import express, { Router } from "express";

import { StepsRouter } from "./stepsRouter";
import { SolutionsRouter } from './solutionsRouter'
import { TemplatesRouter } from './templatesRouter'
import { TestingRouter } from './testingRouter'
import { LessonsRouter } from './lessonsRouter'
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
import {swaggerJsDocOptions, swaggerUIOptions} from '../../utils/swagger'
import fs from 'fs'

const specs = swaggerJsDoc(swaggerJsDocOptions)

fs.writeFileSync('docs/swagger.json', JSON.stringify(specs));

router.use('/docs', swaggerUI.serve, swaggerUI.setup(specs,swaggerUIOptions))
// ...

export {router as V1Router}