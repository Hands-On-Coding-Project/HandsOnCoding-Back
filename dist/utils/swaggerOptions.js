"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerUIOptions = exports.swaggerJsDocOptions = void 0;
exports.swaggerJsDocOptions = {
    // explorer: true,
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'HandsOnCoding API',
            version: '1.0.0',
            description: 'The REST API for the HandsOnCoding project, an open-source MOOC (Massive Open Online Courses) for multiple programming languages.'
        },
        servers: [
            {
                url: 'http://localhost:8080/api/v1'
            }
        ]
    },
    apis: ['./src/routes/v1/*.ts']
};
exports.swaggerUIOptions = {
    // explorer: true,
    customCss: '.swagger-ui .topbar { display: none }',
    swaggerOptions: {
        display: {
            syntaxHighligh: {
                activate: false,
                theme: "arta"
            }
        }
    },
};
//# sourceMappingURL=swaggerOptions.js.map