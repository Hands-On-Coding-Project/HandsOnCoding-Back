"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplatesRouter = void 0;
const express_1 = __importDefault(require("express"));
const templatesService_1 = require("../../services/templatesService");
const router = express_1.default.Router();
exports.TemplatesRouter = router;
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
router.route("/").get((req, res) => {
    (0, templatesService_1.getTemplates)()
        .then((v) => {
        res.status(200);
        res.send(v);
    })
        .catch((e) => {
        res.status(400);
        const error = {
            type: "Request",
            data: e
        };
        res.send(error);
    });
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
router.route("/:id").get((req, res) => {
    (0, templatesService_1.getTemplate)(req.params.id)
        .then((v) => {
        if (!v) {
            res.status(404);
            const error = {
                type: "Not Found",
                data: 'Item with id "' + req.params.id + '" not found'
            };
            res.send(error);
        }
        else {
            res.status(200);
            res.send(v);
        }
    })
        .catch((e) => {
        res.status(400);
        const error = {
            type: "Request",
            data: e
        };
        res.send(error);
    });
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
router.route("/").post((req, res) => {
    (0, templatesService_1.createTemplate)(req.body)
        .then((v) => {
        res.status(201);
        res.send(v);
    })
        .catch((e) => {
        res.status(400);
        const error = {
            type: "Request",
            data: e
        };
        res.send(error);
    });
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
router.route("/:id").put((req, res) => {
    (0, templatesService_1.updateTemplate)(req.params.id, req.body)
        .then((v) => {
        res.status(200);
        res.send(v);
    })
        .catch((e) => {
        res.status(400);
        const error = {
            type: "Request",
            data: e
        };
        res.send(error);
    });
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
router.route("/:id").delete((req, res) => {
    (0, templatesService_1.deleteTemplate)(req.params.id)
        .then((v) => {
        res.status(200);
        res.send(v);
    })
        .catch((e) => {
        res.status(400);
        const error = {
            type: "Request",
            data: e
        };
        res.send(error);
    });
});
//# sourceMappingURL=templatesRouter.js.map