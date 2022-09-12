"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// DotEnv
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// ...
// Express
const express_1 = __importDefault(require("express"));
const port = process.env.PORT;
const app = (0, express_1.default)();
// ...
// Cors
const cors_1 = __importDefault(require("cors"));
app.use((0, cors_1.default)());
const allowedOrigins = ['http://localhost:3000'];
const options = {
    origin: allowedOrigins
};
app.use((0, cors_1.default)(options));
// ...
// BodyParser
const body_parser_1 = __importDefault(require("body-parser"));
app.use(body_parser_1.default.json());
// ...
const routes_1 = require("./routes/v1/routes");
app.use("/api/v1", routes_1.V1Router);
app.get("/api", (req, res) => {
    res.send("<h1>Welcome to the Hands On Coding API!</h1>" +
        '<li>Steps: <a href="steps">"/steps"</a></li>');
});
app.listen(port, () => {
    console.log(`🦌 API is listening on port http://localhost:${port}/api`);
});
// Swagger
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerOptions_1 = require("./utils/swaggerOptions");
const specs = (0, swagger_jsdoc_1.default)(swaggerOptions_1.swaggerJsDocOptions);
app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs, swaggerOptions_1.swaggerUIOptions));
// ...
//# sourceMappingURL=index.js.map