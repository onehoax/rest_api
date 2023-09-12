/* eslint-disable @typescript-eslint/no-unused-vars */
import { fileURLToPath } from "node:url";
import { logger } from "../utils/logger.js";
import { MyError, baseLog, invalidRequest, unableToFind } from "../utils/error.js";
import { Request, Response, NextFunction } from "express";
import { Person } from "../model/person.js";
import * as service from "../service/person.js";

const __filename: string = fileURLToPath(import.meta.url);

async function createOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const name: string | undefined = req.body.name;
        const email: string | undefined = req.body.email;

        if (name === undefined || email === undefined) throw new MyError(400, invalidRequest);

        const record: boolean = await service.createOne(req.body);

        res.json(record);
    } catch (e: unknown) {
        logger.error(baseLog(__filename, createOne.name, "Controller"));
        next(e);
    }
}

async function createMany(entries: Person[]): Promise<number> {
    return await service.createMany(entries);
}

async function findOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const name: string | undefined = req.params["name"];
        const email: string | undefined = req.params["email"];

        if (name === undefined || email === undefined) throw new MyError(400, invalidRequest);

        const record: Person | null = await service.findOne(name, email);

        if (!record) throw new MyError(404, unableToFind);
        else res.json(record);
    } catch (e: unknown) {
        logger.error(baseLog(__filename, findOne.name, "Controller"));
        next(e);
    }
}

async function findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const recrods: Person[] = await service.findAll();
        res.json(recrods);
    } catch (e: unknown) {
        logger.error(baseLog(__filename, findAll.name, "Controller"));
        next(e);
    }
}

async function updateOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const name: string | undefined = req.body.name;
        const email: string | undefined = req.body.email;

        if (name === undefined || email === undefined) throw new MyError(400, invalidRequest);

        const record: boolean = await service.updateOne(name, email, req.body);

        res.json(record);
    } catch (e: unknown) {
        logger.error(baseLog(__filename, updateOne.name, "Controller"));
        next(e);
    }
}

async function deleteOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const name: string | undefined = req.params["name"];
        const email: string | undefined = req.params["email"];

        if (name === undefined || email === undefined) throw new MyError(400, invalidRequest);

        const record: boolean = await service.deleteOne(name, email);

        res.json(record);
    } catch (e: unknown) {
        logger.error(baseLog(__filename, updateOne.name, "Controller"));
        next(e);
    }
}

export { createOne, createMany, findOne, findAll, updateOne, deleteOne };
