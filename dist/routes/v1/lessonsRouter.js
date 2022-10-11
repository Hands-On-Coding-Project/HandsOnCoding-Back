"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonsRouter = void 0;
const express_1 = __importDefault(require("express"));
const lessonsService_1 = require("../../services/lessonsService");
const stepsService_1 = require("../../services/stepsService");
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
// # 1 Level
const router = express_1.default.Router();
exports.LessonsRouter = router;
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
router.route("/").get((req, res) => {
    (0, lessonsService_1.getLessons)()
        .then((v) => {
        res.status(200);
        res.send(v);
    })
        .catch((e) => {
        res.status(400);
        const error = { type: "Request", data: e };
        res.send(error);
    });
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
router.route("/:id").get((req, res) => {
    (0, lessonsService_1.getLesson)(req.params.id)
        .then((v) => {
        if (!v) {
            res.status(404);
            const error = { type: "Not Found", data: `Record with id "${req.params.id}" not found` };
            res.send(error);
        }
        else {
            res.status(200);
            res.send(v);
        }
    })
        .catch((e) => {
        res.status(400);
        const error = { type: "Request", data: e };
        res.send(error);
    });
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
router.route("/").post((req, res) => {
    (0, lessonsService_1.createLesson)(req.body)
        .then((v) => {
        res.status(201);
        res.send(v);
    })
        .catch((e) => {
        res.status(400);
        const error = { type: "Request", data: e };
        res.send(error);
    });
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
router.route("/:id").put((req, res) => {
    (0, lessonsService_1.updateLesson)(req.params.id, req.body)
        .then((v) => {
        res.status(200);
        res.send(v);
    })
        .catch((e) => {
        res.status(400);
        const error = { type: "Request", data: e };
        res.send(error);
    });
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
router.route("/:id").delete((req, res) => {
    (0, lessonsService_1.deleteLesson)(req.params.id)
        .then((v) => {
        res.status(200);
        res.send(v);
    })
        .catch((e) => {
        res.status(400);
        const error = { type: "Request", data: e };
        res.send(error);
    });
});
// # 2 Level
const stepsRouter = express_1.default.Router({ mergeParams: true });
router.use("/:id/steps", stepsRouter);
// GET
stepsRouter.route("/").get((req, res) => {
    (0, stepsService_1.getStepsInLesson)(req.params.id)
        .then((v) => {
        res.status(200);
        res.send(v);
    })
        .catch((e) => {
        res.status(400);
        const error = { type: "Request", data: e };
        res.send(error);
    });
});
// POST
stepsRouter.route("/").post((req, res) => {
    (0, stepsService_1.createStepInLesson)(req.params.id, req.body)
        .then((v) => {
        res.status(200);
        res.send(v);
    })
        .catch((e) => {
        res.status(400);
        const error = { type: "Request", data: e };
        res.send(error);
    });
});
//# sourceMappingURL=lessonsRouter.js.map