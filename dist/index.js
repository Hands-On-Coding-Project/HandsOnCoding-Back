"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes/v1/routes");
dotenv_1.default.config();
const port = process.env.PORT;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const allowedOrigins = ['http://localhost:3000'];
const options = {
    origin: allowedOrigins
};
app.use((0, cors_1.default)(options));
app.use(body_parser_1.default.json());
app.use("/api/v1", routes_1.V1Router);
app.get("/api", (req, res) => {
    res.send("<h1>Welcome to the Hands On Coding API!</h1>" +
        '<li>Steps: <a href="steps">"/steps"</a></li>');
});
app.listen(port, () => {
    console.log(`🦌 API is listening on port http://localhost:${port}/api`);
});
//# sourceMappingURL=index.js.map