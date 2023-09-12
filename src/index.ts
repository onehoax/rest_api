/* eslint-disable @typescript-eslint/no-unused-vars */
import { handleTopLevelError } from "./utils/error.js";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { peopleRouter } from "./router/person.js";
import { tasksRouter } from "./router/task.js";
import "dotenv/config";
import { logger } from "./utils/logger.js";

const app: express.Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const peoplePath: string = "/api/v1/people";
const tasksPath: string = "/api/v1/tasks";

app.get("/", (req: Request, res: Response, next: NextFunction): void => {
    console.log(req.url);
    res.redirect(peoplePath);
});

app.use(peoplePath, peopleRouter);
app.use(tasksPath, tasksRouter);

app.use("*", (req: express.Request, res: express.Response, next: express.NextFunction): void => {
    res.send("MAKE SURE THE URL IS CORRECT!!!");
});

app.use(handleTopLevelError);

const port: string | number = process.env["APP_PORT"] || 8080;

app.listen(port, (): void => {
    logger.info(`Server is listening on port ${port}`);
});
