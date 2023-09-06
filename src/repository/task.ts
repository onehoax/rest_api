/* eslint-disable @typescript-eslint/no-unused-vars */
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { Logger } from "winston";
import { MyLogger } from "../utils/logger.js";
import { PrismaClient } from "@prisma/client";
import { Person, Task } from "../model/task.js";

const __filename: string = fileURLToPath(import.meta.url);

const baseError: string = `In FILE: ${__filename}, in FUNCTION:`;

const logger: Logger = MyLogger.getInstance().getLogger();

const prisma = new PrismaClient();

// await prisma.tasks.create({
//     data: {
//         name: "Andres Osorio",
//         created_by: "Andres"
//     }
// });

// const post = await prisma.tasks.update({
//     where: { id: 1 },
//     data: { description: "Some random task" }
// });
// console.log(post);

async function getAllPeople(): Promise<Person[]> {
    try {
        return await prisma.people.findMany();
    } catch (e) {
        logger.error(`${baseError} ${getAllPeople.name}: ${e}`);
        throw e;
    }
}

async function getAllTasks(): Promise<Task[]> {
    try {
        return await prisma.tasks.findMany();
    } catch (e) {
        logger.error(`${baseError} ${getAllTasks.name}: ${e}`);
        throw e;
    }
}

getAllPeople().then((p) => console.log(p));
getAllTasks().then((t) => console.log(t));
