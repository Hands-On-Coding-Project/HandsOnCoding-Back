"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestingRouter = void 0;
const express_1 = __importDefault(require("express"));
const testing_1 = require("../../services/testing");
const router = express_1.default.Router();
exports.TestingRouter = router;
/**
 * @swagger
 * tags:
 *  name: Testing
 *  description: Testing endpoint. Methods only available in the testing environment.
 */
/**
 * @swagger
 * /testing/reset:
 *  post:
 *    summary: Clear all the tables/documents on the database.
 *    tags: [Testing]
 *    responses:
 *      204:
 *        description: The entire database is clear.
 *      400:
 *        description: An error occurred due to a bad request.
 */
router.route("/reset").post((req, res) => {
    (0, testing_1.reset)()
        .then(() => {
        res.sendStatus(204);
    })
        .catch((e) => {
        res.status(400);
        res.send(e);
    });
});
/**
 * @swagger
 * /testing/default:
 *  post:
 *    summary: Create a default structure for the entire database.
 *    tags: [Testing]
 *    responses:
 *      204:
 *        description: The structure has been generated.
 *      400:
 *        description: An error occurred due to a bad request.
 */
router.route("/default").post((req, res) => {
    (0, testing_1.defaultStep)()
        .then((v) => {
        res.status(201);
        res.send(v);
    })
        .catch((e) => {
        res.status(400);
        res.send(e);
    });
});
//# sourceMappingURL=testing.js.map