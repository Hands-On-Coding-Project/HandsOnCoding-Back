# HandsOnCoding Business Logic (Back-End)

This is the business logic REST API for the HandsOnCoding project, an open-source MOOC (Massive Open Online Courses) for multiple programming languages.

### Build With

![Node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=black)

## Getting Started

### Prerequisites

In order to run this project you should install [Node](https://nodejs.org/en/download/) in your computer.

To have full access to the database, you should enable your computer IP address in the [MongoDB](https://www.mongodb.com/) cluster.

### Installation

1. Clone the repository
    ```bash
    git clone https://github.com/Esarac/HandsOnCoding-Back.git
    ```
2. Go inside the project folder
   ```bash
   cd HandsOnCoding-Back
   ```
3. Install npm packages
   ```bash
   npm i
   ```

## Usage

### Configuration

In the [schema.prisma](https://github.com/Esarac/HandsOnCoding-Back/blob/main/prisma/schema.prisma) file, you can define all your schemas and the database provider.

To submit your changes into the database, use the following command:

```bash
npm run db-push
```
For more information, visit the [Prisma](https://www.prisma.io/docs/) webpage.

You can also define the:

* PORT
* DATABASE_URL

in the [.env.development](https://github.com/Esarac/HandsOnCoding-Back/blob/main/.env.development) and [.env.test](https://github.com/Esarac/HandsOnCoding-Back/blob/main/.env.test) files.

### Start

To run the REST API, just execute the command:
* Dev env
  ```bash
  npm start
  # or
  npm run dev
  ```
* Test env
  ```bash
  npm run test
  ```

If you want to use Docker, open Docker Desktop and run this commands instead:
```bash
docker build -t back:hoc .
docker run --name hoc_back -p 8080:8080 back:hoc
```
In both cases, the service will be running at http://localhost:8080/. For more information, you can access the API documentation via the route [http://localhost:8080/api/v1/docs](http://localhost:8080/api/v1/docs).

### Prisma Studio

[Prisma Studio](https://www.prisma.io/studio) is a visual editor for the data in your database.

To open Prisma Studio, use the following command:

* Dev env
  ```bash
  npm run ps-dev
  ```
* Test env
  ```bash
  npm run ps-test
  ```

## Related Projects

* [HandsOnCoding (Front-End)](https://github.com/Esarac/HandsOnCoding-Front)
* [HandsOnCoding Compiler (Back-End)](https://github.com/mavaldot/pdg-compiler)

## Contact Information

### ![Quality](https://images.weserv.nl/?url=avatars.githubusercontent.com/u/48232743?v=4&h=50&w=50&fit=cover&mask=circle&maxage=7d) Esteban Ariza Acosta (Esarac)

[![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Esarac)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/estebanarizaacosta/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:acosta57esteban@gmail.com)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/esaracgp/)
