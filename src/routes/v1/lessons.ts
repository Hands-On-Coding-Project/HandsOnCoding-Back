import express, { Router, Request, Response } from "express";
import { Lesson, LessonDTO, LessonNested } from "../../models/lessons";
import { getLesson, getLessons, createLesson, updateLesson, deleteLesson } from "../../services/lessons";

/**
 * parameters:
 *    lessonId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: The lesson id.
 *
 * tags:
 *  name: Lessons
 *  description: Lessons endpoint.
*/
const router: Router = express.Router();

// GET
/**
 * @swagger
 * /lessons:
 *  get:
 *    summary: Get all lessons.
 *    tags: [Lessons]
 *    responses:
 *      200:
 *        description: All the lessons.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Lesson'
 *      400:
 *        description: An error occurred due to a bad request.
 */
router.route("/").get((req: Request, res: Response<Lesson[]>) => {
  getLessons()
  .then((v) => {
    res.status(200)
    res.send(v)
  })
  .catch((e) => {
    res.status(400)
    res.send(e)
  })
});

/**
 * @swagger
 * /lessons/{id}:
 *  get:
 *    summary: Get a lesson by id.
 *    tags: [Lessons]
 *    parameters:
 *      - $ref: '#/components/parameters/lessonId'
 *    responses:
 *      200:
 *        description: The lesson with its steps.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/LessonNested'
 *      204:
 *        description: The lesson can not be found.
 *      400:
 *        description: An error occurred due to a bad request.
 */
router.route("/:id").get((req: Request, res: Response<LessonNested>) => {
  getLesson(req.params.id)
  .then((v) => {
    if(!v)
      res.sendStatus(204)
    else{
      res.status(200)
      res.send(v)
    }
  })
  .catch((e)=>{
    res.status(400)
    res.send(e)
  })
});

// POST
/**
 * @swagger
 * /lessons:
 *  post:
 *    summary: Create a lesson.
 *    tags: [Lessons]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/LessonDTO'
 *    responses:
 *      201:
 *        description: The created lesson.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Lesson'
 *      400:
 *        description: An error occurred due to a bad request.
 */
router.route("/").post((req: Request<any, any, LessonDTO>, res: Response<Lesson>) => {
  createLesson(req.body)
  .then((v) => {
    res.status(201)
    res.send(v)
  })
  .catch((e) => {
    console.log(e)
    res.status(400)
    res.send(e)
  })
});

// PUT
/**
 * @swagger
 * /lessons/{id}:
 *  put:
 *    summary: Update a lesson by id.
 *    tags: [Lessons]
 *    parameters:
 *      - $ref: '#/components/parameters/lessonId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/LessonDTO'
 *    responses:
 *      200:
 *        description: The updated lesson.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Lesson'
 *      400:
 *        description: An error occurred due to a bad request.
 */
router.route("/:id").put((req: Request<any, any, LessonDTO>, res: Response<Lesson>) => {
  updateLesson(req.params.id,req.body)
  .then((v) => {
    res.status(200)
    res.send(v)
  })
  .catch((e) => {
    res.status(400)
    res.send(e)
  })
});

// DELETE
/**
 * @swagger
 * /lessons/{id}:
 *  delete:
 *    summary: Delete a lesson by id.
 *    tags: [Lessons]
 *    parameters:
 *      - $ref: '#/components/parameters/lessonId'
 *    responses:
 *      200:
 *        description: The deleted lesson.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Lesson'
 *      400:
 *        description: An error occurred due to a bad request.
 */
router.route("/:id").delete((req: Request, res: Response<Lesson>) => {
  deleteLesson(req.params.id)
  .then((v) => {
    res.status(200)
    res.send(v)
  })
  .catch((e) => {
    res.status(400)
    res.send(e)
  })
});

export {router as LessonsRouter};