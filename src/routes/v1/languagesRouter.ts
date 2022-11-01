import express, { Request, Response, Router } from "express";
import { Language } from "../../models/language";
import { ErrorMessage } from "../../models/error";
import { getLanguages } from "../../services/languagesService";

const router: Router = express.Router();

router.route("/").get((req: Request, res: Response<Language[] | ErrorMessage>) => {
    getLanguages()
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

export { router as LanguagesRouter }