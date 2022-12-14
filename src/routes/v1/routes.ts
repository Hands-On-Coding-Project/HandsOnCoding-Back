import express, { Router } from "express";

import { StepsRouter } from "./stepsRouter";
import { LessonsRouter } from './lessonsRouter';
import { CoursesRouter } from "./coursesRouter";
import { LanguagesRouter } from "./languagesRouter";
import { TestingRouter } from './testingRouter';

const router: Router = express.Router();

router.use("/steps", StepsRouter);
router.use("/lessons", LessonsRouter);
router.use("/languages", LanguagesRouter)
router.use("/courses", CoursesRouter)
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