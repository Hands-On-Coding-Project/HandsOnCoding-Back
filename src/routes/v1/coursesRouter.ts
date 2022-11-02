import express, { Router, Request, Response } from "express";
import { CourseDTO, Course, CourseNested } from "../../models/course";
import { ErrorMessage } from "../../models/error";
import { getCourse, getCourses, createCourse, updateCourse, deleteCourse } from "../../services/coursesService";

// # 1 Level
const router: Router = express.Router();

// GET
router.route("/").get((req: Request, res: Response<Course[] | ErrorMessage>) => {
  getCourses()
    .then((v) => {
      res.status(200)
      res.send(v)
    })
    .catch((e) => {
      res.status(400)
      const error: ErrorMessage = { type: "Request", data: e }
      res.send(error)
    })
});

router.route("/:courseId").get((req: Request, res: Response<CourseNested | ErrorMessage>) => {
  getCourse(req.params.courseId)
    .then((v) => {
      if (!v) {
        res.status(404)
        const error: ErrorMessage = { type: "Not Found", data: `Record with id "${req.params.courseId}" not found` }
        res.send(error)
      }
      else {
        res.status(200)
        res.send(v)
      }
    })
    .catch((e) => {
      res.status(400)
      const error: ErrorMessage = { type: "Request", data: e }
      res.send(error)
    })
});

// POST
router.route("/").post((req: Request<any, any, CourseDTO>, res: Response<Course | ErrorMessage>) => {
  createCourse(req.body)
    .then((v) => {
      res.status(201)
      res.send(v)
    })
    .catch((e) => {
      res.status(400)
      const error: ErrorMessage = { type: "Request", data: e }
      res.send(error)
    })
});

// PUT
router.route("/:courseId").put((req: Request<any, any, CourseDTO>, res: Response<Course | ErrorMessage>) => {
  updateCourse(req.params.courseId, req.body)
    .then((v) => {
      res.status(200)
      res.send(v)
    })
    .catch((e) => {
      res.status(400)
      const error: ErrorMessage = { type: "Request", data: e }
      res.send(error)
    })
});

// DELETE
router.route("/:courseId").delete((req: Request, res: Response<Course | ErrorMessage>) => {
  deleteCourse(req.params.courseId)
    .then((v) => {
      res.status(200)
      res.send(v)
    })
    .catch((e) => {
      res.status(400)
      const error: ErrorMessage = { type: "Request", data: e }
      res.send(error)
    })
});

export { router as CoursesRouter };