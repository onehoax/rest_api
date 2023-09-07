/* eslint-disable @typescript-eslint/no-unused-vars */
import { fileURLToPath } from "node:url";
import { Logger } from "winston";
import { MyLogger } from "../utils/logger.js";
import {
    MyError,
    baseLog,
    handleRepositoryError,
    resourceExists,
    unableToDelete,
    unableToFind,
    unableToInsert,
    unableToUpdate
} from "../utils/error.js";
import { Person } from "../model/person.js";
import { CRUD } from "./crud.js";
import { Prisma, client } from "./prismaClient.js";
import { people } from "@prisma/client";

const __filename: string = fileURLToPath(import.meta.url);
const logger: Logger = MyLogger.getInstance().getLogger();

/**
 * Person repository for CRUD operations
 */
class PersonRepository implements CRUD<Person> {
    async createOne(entry: Person): Promise<boolean> {
        try {
            const exists: Person | null = await this.findOne(entry.name, entry.email);

            if (!exists) {
                const record: Person = await client.people.create({
                    data: entry
                });

                if (record) return true;
                else throw new MyError(500, unableToInsert);
            } else {
                throw new MyError(409, resourceExists);
            }
        } catch (e: unknown) {
            logger.error(baseLog(__filename, this.createOne.name, "Prisma"));
            throw handleRepositoryError(e);
        }
    }

    async createMany(entries: Person[]): Promise<number> {
        try {
            const records: Prisma.BatchPayload = await client.people.createMany({
                data: entries
            });

            if (records.count === entries.length) return records.count;
            else throw new MyError(500, unableToInsert);
        } catch (e: unknown) {
            logger.error(baseLog(__filename, this.createMany.name, "Prisma"));
            throw handleRepositoryError(e);
        }
    }

    async findOne(name: string, email: string): Promise<Person | null> {
        try {
            const record: Person | null = await client.people.findUnique({
                where: {
                    name_email: {
                        name: name,
                        email: email
                    }
                }
            });

            if (record) return record;
            else return null;
        } catch (e: unknown) {
            logger.error(baseLog(__filename, this.findOne.name, "Prisma"));
            throw handleRepositoryError(e);
        }
    }

    async findAll(): Promise<Person[]> {
        try {
            const records: people[] = await client.people.findMany();

            if (records.length > 0) return records;
            else throw new MyError(404, unableToFind);
        } catch (e: unknown) {
            logger.error(baseLog(__filename, this.findAll.name, "Prisma"));
            throw handleRepositoryError(e);
        }
    }

    async updateOne(name: string, email: string, entry: Person): Promise<boolean> {
        try {
            const exists: Person | null = await this.findOne(name, email);

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
                else throw new MyError(500, unableToUpdate);
            } else {
                throw new MyError(404, unableToFind);
            }
        } catch (e: unknown) {
            logger.error(baseLog(__filename, this.updateOne.name, "Prisma"));
            throw handleRepositoryError(e);
        }
    }

    async deleteOne(name: string, email: string): Promise<boolean> {
        try {
            const exists: Person | null = await this.findOne(name, email);

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
                else throw new MyError(500, unableToDelete);
            } else {
                throw new MyError(404, unableToFind);
            }
        } catch (e: unknown) {
            logger.error(baseLog(__filename, this.deleteOne.name, "Prisma"));
            throw handleRepositoryError(e);
        }
    }
}

/*

============================== Test ==============================

const person: Person = {
    name: "Maria Luisa",
    email: "maria@email.com",
    phone: "456132"
};

const people: Person[] = [
    { name: "Valen", email: "valen@email.com" },
    { name: "Nela", email: "nela@gmail.conm" },
    { name: "Nico", email: "nico@email.com" }
];

const r = new PersonRepository();
r.createOne(person).then((r) => console.log(r));
r.createMany(people).then((p) => console.log(p));

r.findOne(person.name, person.email).then((r) => console.log(r));
r.findOne("carlos", "someemaiul").then((r) => console.log(r));
r.findAll().then((r) => console.log(r));

r.updateOne(person.name, person.email, person).then((p) => console.log(p));
r.updateOne("carlos", "asome", person).then((p) => console.log(p));

r.deleteOne(person.name, person.email).then((p) => console.log(p));
r.deleteOne("carlos", "sdljhf").then((p) => console.log(p));

*/

export { PersonRepository };
