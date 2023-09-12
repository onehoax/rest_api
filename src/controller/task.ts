/* eslint-disable @typescript-eslint/no-unused-vars */
import { fileURLToPath } from "node:url";
import { logger } from "../utils/logger.js";
import { MyError, baseLog, invalidRequest, unableToFind } from "../utils/error.js";
import { Request, Response, NextFunction } from "express";
import { Task } from "../model/task.js";
import * as service from "../service/task.js";

const __filename: string = fileURLToPath(import.meta.url);

async function findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const recrods: Task[] = await service.findAll();
        res.json(recrods);
    } catch (e: unknown) {
        logger.error(baseLog(__filename, findAll.name, "Controller"));
        next(e);
    }
}

async function findTasksByUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const name: string | undefined = req.params["name"];
        const email: string | undefined = req.params["email"];

        if (name === undefined || email === undefined) throw new MyError(400, invalidRequest);

        const recrods: Task[] = await service.findTasksByUser(name, email);
        res.json(recrods);
    } catch (e: unknown) {
        logger.error(baseLog(__filename, findTasksByUser.name, "Controller"));
        next(e);
    }
}

async function createTaskForUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const name: string | undefined = req.params["name"];
        const email: string | undefined = req.params["email"];

        if (name === undefined || email === undefined) throw new MyError(400, invalidRequest);

        const recrods: boolean = await service.createTaskForUser(name, email, req.body);
        res.json(recrods);
    } catch (e: unknown) {
        logger.error(baseLog(__filename, createTaskForUser.name, "Controller"));
        next(e);
    }
}

async function deleteTasksByUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const name: string | undefined = req.params["name"];
        const email: string | undefined = req.params["email"];

        if (name === undefined || email === undefined) throw new MyError(400, invalidRequest);

        const recrods: boolean = await service.deleteTasksByUser(name, email);
        res.json(recrods);
    } catch (e: unknown) {
        logger.error(baseLog(__filename, deleteTasksByUser.name, "Controller"));
        next(e);
    }
}

export { findAll, findTasksByUser, createTaskForUser, deleteTasksByUser };
