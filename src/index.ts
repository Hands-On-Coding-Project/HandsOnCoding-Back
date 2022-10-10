// DotEnv
import dotenv from "dotenv";
dotenv.config();
// ...

// Express
import express, { Express, Request, Response } from "express";
const port = process.env.PORT;
const app: Express = express();
// ...

// Cors
import cors from 'cors';
app.use(cors());
const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));
// ...

// BodyParser
import bodyParser from "body-parser";
app.use(bodyParser.json());
// ...

import { V1Router } from './routes/v1/routes'
app.use("/api/v1", V1Router);

app.get( "/api", ( req: Request, res: Response) => {
    res.send( "<h1>Welcome to the Hands On Coding API!</h1>" +
    '<li>Steps: <a href="steps">"/steps"</a></li>'
    );
} );

app.listen( port, () => {
  console.log(`🦌 API is listening on port http://localhost:${ port }/api/v1/docs in the ${process.env.NODE_ENV} environment.`);
});