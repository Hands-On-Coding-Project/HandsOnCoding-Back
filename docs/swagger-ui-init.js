window.onload = function() {
    // Build a system
    var url = window.location.search.match(/url=([^&]+)/);
    if (url && url.length > 1) {
      url = decodeURIComponent(url[1]);
    } else {
      url = window.location.origin;
    }
    var options = {
    "swaggerDoc": {
      "openapi": "3.0.0",
      "info": {
        "title": "HandsOnCoding API",
        "version": "1.0.0",
        "description": "The REST API for the HandsOnCoding project, an open-source MOOC (Massive Open Online Courses) for multiple programming languages."
      },
      "servers": [
        {
          "url": "http://localhost:8080/api/v1"
        }
      ],
      "paths": {
        "/solutions": {
          "get": {
            "summary": "Get all solutions.",
            "tags": [
              "Solutions"
            ],
            "responses": {
              "200": {
                "description": "All the solutions.",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/Solution"
                      }
                    }
                  }
                }
              },
              "400": {
                "description": "An error occurred due to a bad request."
              }
            }
          },
          "post": {
            "summary": "Create a solution.",
            "tags": [
              "Solutions"
            ],
            "requestBody": {
              "required": true,
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Solution"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "The created solution.",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Solution"
                    }
                  }
                }
              },
              "400": {
                "description": "An error occurred due to a bad request."
              }
            }
          }
        },
        "/solutions/{id}": {
          "get": {
            "summary": "Get a solution by id.",
            "tags": [
              "Solutions"
            ],
            "parameters": [
              {
                "$ref": "#/components/parameters/solutionId"
              }
            ],
            "responses": {
              "200": {
                "description": "The solution.",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Solution"
                    }
                  }
                }
              },
              "400": {
                "description": "An error occurred due to a bad request."
              }
            }
          },
          "put": {
            "summary": "Update a solution by id.",
            "tags": [
              "Solutions"
            ],
            "parameters": [
              {
                "$ref": "#/components/parameters/solutionId"
              }
            ],
            "requestBody": {
              "required": true,
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Solution"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "The updated solution.",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Solution"
                    }
                  }
                }
              },
              "400": {
                "description": "An error occurred due to a bad request."
              }
            }
          },
          "delete": {
            "summary": "Delete a solution by id.",
            "tags": [
              "Solutions"
            ],
            "parameters": [
              {
                "$ref": "#/components/parameters/solutionId"
              }
            ],
            "responses": {
              "200": {
                "description": "The deleted solution.",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Solution"
                    }
                  }
                }
              },
              "400": {
                "description": "An error occurred due to a bad request."
              }
            }
          }
        },
        "/steps": {
          "get": {
            "summary": "Get all steps.",
            "tags": [
              "Steps"
            ],
            "responses": {
              "200": {
                "description": "All the steps.",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/Step"
                      }
                    }
                  }
                }
              },
              "400": {
                "description": "An error occurred due to a bad request."
              }
            }
          },
          "post": {
            "summary": "Create a step.",
            "tags": [
              "Steps"
            ],
            "requestBody": {
              "required": true,
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Step"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "The created step.",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Step"
                    }
                  }
                }
              },
              "400": {
                "description": "An error occurred due to a bad request."
              }
            }
          }
        },
        "/steps/{id}": {
          "get": {
            "summary": "Get a step by id.",
            "tags": [
              "Steps"
            ],
            "parameters": [
              {
                "$ref": "#/components/parameters/stepId"
              }
            ],
            "responses": {
              "200": {
                "description": "The step.",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Step"
                    }
                  }
                }
              },
              "400": {
                "description": "An error occurred due to a bad request."
              }
            }
          },
          "put": {
            "summary": "Update a step by id.",
            "tags": [
              "Steps"
            ],
            "parameters": [
              {
                "$ref": "#/components/parameters/stepId"
              }
            ],
            "requestBody": {
              "required": true,
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Step"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "The updated step.",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Step"
                    }
                  }
                }
              },
              "400": {
                "description": "An error occurred due to a bad request."
              }
            }
          },
          "delete": {
            "summary": "Delete a step by id.",
            "tags": [
              "Steps"
            ],
            "parameters": [
              {
                "$ref": "#/components/parameters/stepId"
              }
            ],
            "responses": {
              "200": {
                "description": "The deleted step.",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Step"
                    }
                  }
                }
              },
              "400": {
                "description": "An error occurred due to a bad request."
              }
            }
          }
        },
        "/templates": {
          "get": {
            "summary": "Get all templates.",
            "tags": [
              "Templates"
            ],
            "responses": {
              "200": {
                "description": "All the templates.",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/Template"
                      }
                    }
                  }
                }
              },
              "400": {
                "description": "An error occurred due to a bad request."
              }
            }
          },
          "post": {
            "summary": "Create a template.",
            "tags": [
              "Templates"
            ],
            "requestBody": {
              "required": true,
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Template"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "The created template.",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Template"
                    }
                  }
                }
              },
              "400": {
                "description": "An error occurred due to a bad request."
              }
            }
          }
        },
        "/templates/{id}": {
          "get": {
            "summary": "Get a template by id.",
            "tags": [
              "Templates"
            ],
            "parameters": [
              {
                "$ref": "#/components/parameters/templateId"
              }
            ],
            "responses": {
              "200": {
                "description": "The template.",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Template"
                    }
                  }
                }
              },
              "400": {
                "description": "An error occurred due to a bad request."
              }
            }
          },
          "put": {
            "summary": "Update a template by id.",
            "tags": [
              "Templates"
            ],
            "parameters": [
              {
                "$ref": "#/components/parameters/templateId"
              }
            ],
            "requestBody": {
              "required": true,
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Template"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "The updated template.",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Template"
                    }
                  }
                }
              },
              "400": {
                "description": "An error occurred due to a bad request."
              }
            }
          },
          "delete": {
            "summary": "Delete a template by id.",
            "tags": [
              "Templates"
            ],
            "parameters": [
              {
                "$ref": "#/components/parameters/templateId"
              }
            ],
            "responses": {
              "200": {
                "description": "The deleted template.",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Template"
                    }
                  }
                }
              },
              "400": {
                "description": "An error occurred due to a bad request."
              }
            }
          }
        },
        "/testing/reset": {
          "post": {
            "summary": "Clear all the tables/documents on the database.",
            "tags": [
              "Testing"
            ],
            "responses": {
              "204": {
                "description": "The entire database is clear."
              },
              "400": {
                "description": "An error occurred due to a bad request."
              }
            }
          }
        },
        "/testing/default": {
          "post": {
            "summary": "Create a default structure for the entire database.",
            "tags": [
              "Testing"
            ],
            "responses": {
              "204": {
                "description": "The structure has been generated."
              },
              "400": {
                "description": "An error occurred due to a bad request."
              }
            }
          }
        }
      },
      "components": {
        "schemas": {
          "Solution": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "description": "The autogenerated id of the solution."
              },
              "name": {
                "type": "string",
                "description": "The file name."
              },
              "content": {
                "type": "string",
                "description": "The content of the file."
              },
              "updatedAt": {
                "type": "string",
                "description": "The last time the file was updated."
              },
              "stepId": {
                "type": "string",
                "description": "The id of the existing step that uses this solution."
              }
            },
            "required": [
              "name",
              "content",
              "stepId"
            ],
            "examples": {
              "id": "631411d97ceeeb5338fdd966",
              "name": "main.py",
              "content": "print(\\\"Hello world!\\\")",
              "updateAt": "2022-09-04T07:18:20.250Z",
              "stepId": "63158ff83cd164cc4fda4281"
            }
          },
          "Step": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "description": "The autogenerated id of the step."
              },
              "description": {
                "type": "string",
                "description": "The instructions of the step."
              },
              "lessonId": {
                "type": "string",
                "description": "The id of the existing lesson that uses this step."
              },
              "template": {
                "$ref": "#/components/schemas/Template"
              },
              "solution": {
                "$ref": "#/components/schemas/Solution"
              }
            },
            "required": [
              "description",
              "lessonId"
            ],
            "examples": {
              "id": "63158ff83cd164cc4fda4282",
              "description": "Print \\\"Hello world!\\\"",
              "lessonId": "6314112d7ceeeb5338fdd955",
              "template": {
                "id": "63158ff83cd164cc4fda4281",
                "name": "main.py",
                "content": "print(\\\"Hello!\\\")",
                "updateAt": "2022-09-04T07:18:20.250Z",
                "stepId": "63158ff83cd164cc4fda4282"
              },
              "solution": {
                "id": "63158ff83cd164cc4fda4281",
                "name": "main.py",
                "content": "print(\\\"Hello world!\\\")",
                "updateAt": "2022-09-04T07:18:20.250Z",
                "stepId": "63158ff83cd164cc4fda4282"
              }
            }
          },
          "Template": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "description": "The autogenerated id of the template."
              },
              "name": {
                "type": "string",
                "description": "The file name."
              },
              "content": {
                "type": "string",
                "description": "The content of the file."
              },
              "updatedAt": {
                "type": "string",
                "description": "The last time the file was updated."
              },
              "stepId": {
                "type": "string",
                "description": "The id of the existing step that uses this template."
              }
            },
            "required": [
              "name",
              "content",
              "stepId"
            ],
            "examples": {
              "id": "63158ff83cd164cc4fda4282",
              "name": "main.py",
              "content": "print(\\\"Hello!\\\")",
              "updateAt": "2022-09-04T07:18:20.250Z",
              "stepId": "63158ff83cd164cc4fda4281"
            }
          }
        },
        "parameters": {
          "solutionId": {
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            },
            "description": "The solution id."
          },
          "stepId": {
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            },
            "description": "The step id."
          },
          "templateId": {
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            },
            "description": "The template id."
          }
        }
      },
      "tags": [
        {
          "name": "Solutions",
          "description": "Solutions endpoint."
        },
        {
          "name": "Steps",
          "description": "Steps endpoint."
        },
        {
          "name": "Templates",
          "description": "Templates endpoint."
        },
        {
          "name": "Testing",
          "description": "Testing endpoint. Methods only available in the testing environment."
        }
      ]
    },
    "customOptions": {
      "display": {
        "syntaxHighligh": {
          "activate": false,
          "theme": "arta"
        }
      }
    }
  };
    url = options.swaggerUrl || url
    var urls = options.swaggerUrls
    var customOptions = options.customOptions
    var spec1 = options.swaggerDoc
    var swaggerOptions = {
      spec: spec1,
      url: url,
      urls: urls,
      dom_id: '#swagger-ui',
      deepLinking: true,
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIStandalonePreset
      ],
      plugins: [
        SwaggerUIBundle.plugins.DownloadUrl
      ],
      layout: "StandaloneLayout"
    }
    for (var attrname in customOptions) {
      swaggerOptions[attrname] = customOptions[attrname];
    }
    var ui = SwaggerUIBundle(swaggerOptions)
  
    if (customOptions.oauth) {
      ui.initOAuth(customOptions.oauth)
    }
  
    if (customOptions.authAction) {
      ui.authActions.authorize(customOptions.authAction)
    }
  
    window.ui = ui
  }
  