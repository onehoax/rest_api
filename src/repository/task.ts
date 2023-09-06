/* eslint-disable @typescript-eslint/no-unused-vars */
import { fileURLToPath } from "node:url";
import { Logger } from "winston";
import { MyLogger } from "../utils/logger.js";
import { MyError } from "../utils/error.js";
import { Person } from "../model/task.js";
import { CRUD } from "./crud.js";
import { Prisma, client } from "./prismaClient.js";

const __filename: string = fileURLToPath(import.meta.url);
const logger: Logger = MyLogger.getInstance().getLogger();

class PersonRepository implements CRUD<Person> {
    async getAll(): Promise<Person[]> {
        try {
            return await client.people.findMany();
        } catch (e: unknown) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                logger.error(MyError.baseLog(__filename, this.getAll.name, e.code, e.message));
                // const codeMsg: [number, string] = MyError.prismaError(e.code, e.message);
                // throw new MyError(codeMsg[1], codeMsg[0]);
                throw e;
            } else {
                logger.error("DB connection error");
                throw new MyError("coudln't connect to DB", 500);
            }
        }
    }

    getOne(): Promise<Person> {
        throw new Error("Method not implemented.");
    }
    createAll(entries: Person[]): Promise<Person[]> {
        throw new Error("Method not implemented.");
    }
    createOne(entry: Person): Promise<Person> {
        throw new Error("Method not implemented.");
    }
    updateAll(entries: Person[]): Promise<Person[]> {
        throw new Error("Method not implemented.");
    }
    updateOne(entry: Person): Promise<Person> {
        throw new Error("Method not implemented.");
    }
    deleteAll(entries: Person[]): Promise<Person[]> {
        throw new Error("Method not implemented.");
    }
    deleteOne(entry: Person[]): Promise<Person> {
        throw new Error("Method not implemented.");
    }
}

const m = new PersonRepository();
m.getAll().then((r) => console.log(r));

export { PersonRepository };
