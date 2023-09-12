/* eslint-disable @typescript-eslint/no-unused-vars */
import { fileURLToPath } from "node:url";
import { logger } from "../utils/logger.js";
import * as utils from "../utils/error.js";
import { Person } from "../model/person.js";
import { Prisma, client } from "./prismaClient.js";
import { people } from "@prisma/client";

const __filename: string = fileURLToPath(import.meta.url);

async function createOne(entry: Person): Promise<boolean> {
    try {
        const exists: Person | null = await findOne(entry.name, entry.email);

        if (!exists) {
            const record: Person = await client.people.create({
                data: entry
            });

            if (record) return true;
            else throw new utils.MyError(500, utils.unableToInsert);
        } else {
            throw new utils.MyError(409, utils.resourceExists);
        }
    } catch (e: unknown) {
        logger.error(utils.baseLog(__filename, createOne.name, "Prisma"));
        throw utils.handleRepositoryError(e);
    }
}

async function createMany(entries: Person[]): Promise<number> {
    try {
        const records: Prisma.BatchPayload = await client.people.createMany({
            data: entries
        });

        if (records.count === entries.length) return records.count;
        else throw new utils.MyError(500, utils.unableToInsert);
    } catch (e: unknown) {
        logger.error(utils.baseLog(__filename, createMany.name, "Prisma"));
        throw utils.handleRepositoryError(e);
    }
}

async function findOne(name: string, email: string): Promise<Person | null> {
    try {
        const record: Person | null = await client.people.findUnique({
            where: {
                name_email: {
                    name: name,
                    email: email
                }
            }
        });

        return record;
    } catch (e: unknown) {
        logger.error(utils.baseLog(__filename, findOne.name, "Prisma"));
        throw utils.handleRepositoryError(e);
    }
}

async function findAll(): Promise<Person[]> {
    try {
        const records: people[] = await client.people.findMany();

        if (records.length > 0) return records;
        else throw new utils.MyError(404, utils.unableToFind);
    } catch (e: unknown) {
        logger.error(utils.baseLog(__filename, findAll.name, "Prisma"));
        throw utils.handleRepositoryError(e);
    }
}

async function updateOne(name: string, email: string, entry: Person): Promise<boolean> {
    try {
        const exists: Person | null = await findOne(name, email);

        if (exists) {
            const record: Person = await client.people.update({
                where: {
                    name_email: {
                        name: name,
                        email: email
                    }
                },
                data: entry
            });

            if (record) return true;
            else throw new utils.MyError(500, utils.unableToUpdate);
        } else {
            throw new utils.MyError(404, utils.unableToFind);
        }
    } catch (e: unknown) {
        logger.error(utils.baseLog(__filename, updateOne.name, "Prisma"));
        throw utils.handleRepositoryError(e);
    }
}

async function deleteOne(name: string, email: string): Promise<boolean> {
    try {
        const exists: Person | null = await findOne(name, email);

        if (exists) {
            const record: Person = await client.people.delete({
                where: {
                    name_email: {
                        name: name,
                        email: email
                    }
                }
            });

            if (record) return true;
            else throw new utils.MyError(500, utils.unableToDelete);
        } else {
            throw new utils.MyError(404, utils.unableToFind);
        }
    } catch (e: unknown) {
        logger.error(utils.baseLog(__filename, deleteOne.name, "Prisma"));
        throw utils.handleRepositoryError(e);
    }
}

export { createOne, createMany, findOne, findAll, updateOne, deleteOne };
