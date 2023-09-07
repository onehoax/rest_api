/* eslint-disable @typescript-eslint/no-unused-vars */
import { fileURLToPath } from "node:url";
import { Logger } from "winston";
import { MyLogger } from "../utils/logger.js";
import { MyError, dbServerError } from "../utils/error.js";
import { Person } from "../model/person.js";
import { CRUD } from "./crud.js";
import { Prisma, client } from "./prismaClient.js";

const __filename: string = fileURLToPath(import.meta.url);
const logger: Logger = MyLogger.getInstance().getLogger();

/**
 * Person repository for CRUD operations
 */
class PersonRepository implements CRUD<Person> {
    async getAll(): Promise<Person[]> {
        try {
            return await client.people.findMany();
        } catch (e: unknown) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                logger.error(MyError.baseLog(__filename, this.getAll.name, e.code, e.message));
                const codeMsg: [number, string] = MyError.prismaError(e.code, e.message);
                throw new MyError(codeMsg[0], codeMsg[1]);
            } else {
                logger.error("DB connection error");
                throw new MyError(500, "Coudln not establish connection to DB");
            }
        }
    }

    async getOne(id: number): Promise<Person | null> {
        try {
            const p: Person | null = await client.people.findUnique({
                where: {
                    person_id: id
                }
            });

            if (!p) throw new MyError(100, "No data was found");
            else return p;
        } catch (e: unknown) {
            if (e instanceof MyError) {
                logger.error(MyError.baseLog(__filename, this.getOne.name, e.errorCode.toString(), e.message));
            }
            throw e;
        }
    }

    async createAll(entries: Person[]): Promise<Person[]> {
        try {
            const records: Prisma.BatchPayload = await client.people.createMany({
                data: entries
            });

            if (records.count > 0) return entries;
            else return [];
        } catch (e: unknown) {
            if (e instanceof MyError) {
                logger.error(MyError.baseLog(__filename, this.getOne.name, e.errorCode.toString(), e.message));
            }
            throw e;
        }
    }

    async createOne(entry: Person): Promise<Person | null> {
        try {
            const record: Person = await client.people.create({
                data: entry
            });

            if (record) return record;
            else return null;
        } catch (e: unknown) {
            if (e instanceof MyError) {
                logger.error(MyError.baseLog(__filename, this.getOne.name, e.errorCode.toString(), e.message));
            }
            throw e;
        }
    }

    async updateAll(
        fieldId: string,
        filter: string | number,
        newValId: string,
        newVal: string | number
    ): Promise<number> {
        try {
            const records: Prisma.BatchPayload = await client.people.updateMany({
                where: {
                    [fieldId]: filter
                },
                data: {
                    [newValId]: newVal
                }
            });

            return records.count;
        } catch (e: unknown) {
            if (e instanceof MyError) {
                logger.error(MyError.baseLog(__filename, this.getOne.name, e.errorCode.toString(), e.message));
            }
            throw e;
        }
    }

    async updateOne(entry: Person): Promise<Person | null> {
        try {
            const record: Person = await client.people.update({
                where: {
                    person_id: entry.person_id!
                },
                data: {
                    name: entry.name,
                    email: entry.email,
                    phone: entry.phone!
                }
            });

            if (record) return record;
            else return null;
        } catch (e: unknown) {
            if (e instanceof MyError) {
                logger.error(MyError.baseLog(__filename, this.getOne.name, e.errorCode.toString(), e.message));
            }
            throw e;
        }
    }

    async deleteAll(filterId: string, filter: string | number): Promise<number> {
        try {
            const records: Prisma.BatchPayload = await client.people.deleteMany({
                where: {
                    [filterId]: filter
                }
            });

            return records.count;
        } catch (e: unknown) {
            if (e instanceof MyError) {
                logger.error(MyError.baseLog(__filename, this.getOne.name, e.errorCode.toString(), e.message));
            }
            throw e;
        }
    }

    async deleteOne(id: number): Promise<Person> {
        try {
            const p: Person = await client.people.delete({
                where: {
                    person_id: id
                }
            });

            return p;
        } catch (e: unknown) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                logger.error(MyError.baseLog(__filename, this.deleteOne.name, e.code, e.message));
                const codeMsg: [number, string] = MyError.prismaError(e.code, e.message);
                throw new MyError(codeMsg[0], codeMsg[1]);
            } else {
                logger.error(MyError.baseLog(__filename, this.deleteOne.name));
                throw new MyError(500, dbServerError);
            }
        }
    }
}

// const m = new PersonRepository();
// m.getAll().then((r) => console.log(r));
// m.getOne(3).then((r) => console.log(r));

// const people: Person[] = [
//     { name: "Valen", email: "valen@email.com" },
//     { name: "Nela", email: "" },
//     { name: "Nico", email: "" }
// ];

// const person: Person = {
//     person_id: 6,
//     name: "Maria Luisa",
//     email: "maria@email.com"
// };

// m.createAll(people).then((p) => console.log(p));
// m.createOne({ name: "Carlos", email: "carlos@email.com" }).then((p) => console.log(p));
// m.updateAll("email", "", "phone", "987654").then((p) => console.log(p));
// m.updateOne(person).then((p) => console.log(p));
// m.deleteAll("email", "").then((p) => console.log(p));
// m.deleteOne(6).then((p) => console.log(p));

export { PersonRepository };
