/* eslint-disable @typescript-eslint/no-unused-vars */
import { fileURLToPath } from "node:url";
import { logger } from "../utils/logger.js";
import * as utils from "../utils/error.js";
import { Task } from "../model/task.js";
import { Person } from "../model/person.js";
import { Prisma, client } from "./prismaClient.js";
import * as personRepo from "./person.js";

const __filename: string = fileURLToPath(import.meta.url);

async function findUser(name: string, email: string): Promise<number> {
    try {
        const user: Person | null = await personRepo.findOne(name, email);

        if (user) return user.person_id!;
        else return -1;
    } catch (e: unknown) {
        logger.error(utils.baseLog(__filename, findUser.name, "Prisma"));
        throw utils.handleRepositoryError(e);
    }
}

async function createTaskForUser(name: string, email: string, entry: Task): Promise<boolean> {
    try {
        const userId: number = await findUser(name, email);

        if (userId === -1) throw new utils.MyError(404, utils.unableToFind);

        const data: Task = {
            person_id: userId,
            name: entry.name
        };

        const record: Task = await client.tasks.create({
            data: data
        });

        if (record) return true;
        else throw new utils.MyError(500, utils.unableToInsert);
    } catch (e: unknown) {
        logger.error(utils.baseLog(__filename, createTaskForUser.name, "Prisma"));
        throw utils.handleRepositoryError(e);
    }
}

async function findTasksByUser(name: string, email: string): Promise<Task[]> {
    try {
        const userId: number = await findUser(name, email);

        if (userId === -1) throw new utils.MyError(404, utils.unableToFind);

        const tasks: Task[] = await client.tasks.findMany({
            where: {
                person_id: userId
            }
        });

        return tasks;
    } catch (e: unknown) {
        logger.error(utils.baseLog(__filename, findTasksByUser.name, "Prisma"));
        throw utils.handleRepositoryError(e);
    }
}

async function findAll(): Promise<Task[]> {
    try {
        const tasks: Task[] = await client.tasks.findMany();

        if (tasks.length > 0) return tasks;
        else throw new utils.MyError(404, utils.unableToFind);
    } catch (e: unknown) {
        logger.error(utils.baseLog(__filename, findAll.name, "Prisma"));
        throw utils.handleRepositoryError(e);
    }
}

async function deleteTasksByUser(name: string, email: string): Promise<boolean> {
    try {
        const userID: number = await findUser(name, email);

        if (userID === -1) throw new utils.MyError(404, utils.unableToFind);

        const record: Prisma.BatchPayload = await client.tasks.deleteMany({
            where: {
                person_id: userID
            }
        });

        if (record.count > 0) return true;
        else throw new utils.MyError(500, utils.unableToDelete);
    } catch (e: unknown) {
        logger.error(utils.baseLog(__filename, deleteTasksByUser.name, "Prisma"));
        throw utils.handleRepositoryError(e);
    }
}

export { createTaskForUser, findTasksByUser, findAll, deleteTasksByUser };
