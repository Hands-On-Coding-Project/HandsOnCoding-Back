import express, {Router, Request, Response} from "express";
import { TemplateDTO, Template } from "../../models/templates";
import { Error } from "../../models/error";
import { getTemplates, getTemplate, createTemplate, updateTemplate, deleteTemplate } from "../../services/templatesService";

const router: Router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Template:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: The autogenerated id of the template.
 *        name:
 *          type: string
 *          description: The file name.
 *        content:
 *          type: string
 *          description: The content of the file.
 *        updatedAt:
 *          type: string
 *          description: The last time the file was updated.
 *        stepId:
 *          type: string
 *          description: The id of the existing step that uses this template.
 *      required:
 *        - name
 *        - content
 *        - stepId
 *      examples:
 *        id: 63158ff83cd164cc4fda4282
 *        name: main.py
 *        content: print(\"Hello!\")
 *        updateAt: 2022-09-04T07:18:20.250Z
 *        stepId: 63158ff83cd164cc4fda4281
 *  parameters:
 *    templateId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: The template id.
 *
 * tags:
 *  name: Templates
 *  description: Templates endpoint.
 */

// GET
/**
 * @swagger
 * /templates:
 *  get:
 *    summary: Get all templates.
 *    tags: [Templates]
 *    responses:
 *      200:
 *        description: All the templates.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Template'
 *      400:
 *        description: An error occurred due to a bad request.
 */
router.route("/").get((req: Request, res: Response<Template[] | Error>) => {
  getTemplates()
  .then((v) => {
    res.status(200)
    res.send(v)
  })
  .catch((e) => {
    res.status(400)
    const error: Error = {
      type: "Request",
      data: e
    }
    res.send(error)
  })
});

/**
 * @swagger
 * /templates/{id}:
 *  get:
 *    summary: Get a template by id.
 *    tags: [Templates]
 *    parameters:
 *      - $ref: '#/components/parameters/templateId'
 *    responses:
 *      200:
 *        description: The template.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Template'
 *      400:
 *        description: An error occurred due to a bad request.
 */
router.route("/:id").get((req: Request, res: Response<Template | Error>) => {
  getTemplate(req.params.id)
  .then((v) => {
    if(!v){
      res.status(404)
      const error: Error = {
        type: "Not Found",
        data: 'Item with id "'+req.params.id+'" not found'
      }
      res.send(error)
    }
    else{
      res.status(200)
      res.send(v)
    }
  })
  .catch((e)=>{
    res.status(400)
    const error: Error = {
      type: "Request",
      data: e
    }
    res.send(error)
  })
});

// POST
/**
 * @swagger
 * /templates:
 *  post:
 *    summary: Create a template.
 *    tags: [Templates]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Template'
 *    responses:
 *      200:
 *        description: The created template.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Template'
 *      400:
 *        description: An error occurred due to a bad request.
 */
router.route("/").post((req: Request<any, any, TemplateDTO>, res: Response<Template | Error>) => {
  createTemplate(req.body)
  .then((v) => {
    res.status(201)
    res.send(v)
  })
  .catch((e) => {
    res.status(400)
    const error: Error = {
      type: "Request",
      data: e
    }
    res.send(error)
  })
});

// PUT
/**
 * @swagger
 * /templates/{id}:
 *  put:
 *    summary: Update a template by id.
 *    tags: [Templates]
 *    parameters:
 *      - $ref: '#/components/parameters/templateId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Template'
 *    responses:
 *      200:
 *        description: The updated template.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Template'
 *      400:
 *        description: An error occurred due to a bad request.
 */
router.route("/:id").put((req: Request<any, any, TemplateDTO>, res: Response<Template | Error>) => {
  updateTemplate(req.params.id,req.body)
  .then((v) => {
    res.status(200)
    res.send(v)
  })
  .catch((e) => {
    res.status(400)
    const error: Error = {
      type: "Request",
      data: e
    }
    res.send(error)
  })
});

// DELETE
/**
 * @swagger
 * /templates/{id}:
 *  delete:
 *    summary: Delete a template by id.
 *    tags: [Templates]
 *    parameters:
 *      - $ref: '#/components/parameters/templateId'
 *    responses:
 *      200:
 *        description: The deleted template.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Template'
 *      400:
 *        description: An error occurred due to a bad request.
 */
router.route("/:id").delete((req: Request, res: Response<Template | Error>) => {
  deleteTemplate(req.params.id)
  .then((v) => {
    res.status(200)
    res.send(v)
  })
  .catch((e) => {
    res.status(400)
    const error: Error = {
      type: "Request",
      data: e
    }
    res.send(error)
  })
});

export {router as TemplatesRouter};