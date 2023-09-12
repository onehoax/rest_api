/* eslint-disable @typescript-eslint/no-unused-vars */
import { fileURLToPath } from "node:url";
import { logger } from "../utils/logger.js";
import { MyError, baseLog, invalidRequest } from "../utils/error.js";
import { Request, Response, NextFunction } from "express";
import { Person } from "../model/person.js";
import { PersonService } from "../service/personOOP.js";

const __filename: string = fileURLToPath(import.meta.url);

class PersonController {
    private personService: PersonService;

    constructor() {
        this.personService = new PersonService();
    }

    async createOne(entry: Person): Promise<boolean> {
        return await this.personService.createOne(entry);
    }

    async createMany(entries: Person[]): Promise<number> {
        return await this.personService.createMany(entries);
    }

    // async findOne(name: string, email: string): Promise<Person | null> {
    //     return await this.personService.findOne(name, email);
    // }

    async findOne(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const name: string | undefined = req.params["name"];
            const email: string | undefined = req.params["email"];

            console.log("NAME:", name);
            console.log("EMAIL:", email);

            if (name === undefined || email === undefined) throw new MyError(400, invalidRequest);

            const record: Person | null = await this.personService.findOne(name, email);
            res.json(record);
        } catch (e: unknown) {
            logger.error(baseLog(__filename, this.findOne.name, "Controller"));
            next(e);
        }
    }

    async findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const recrods: Person[] = await this.personService.findAll();
            res.json(recrods);
        } catch (e: unknown) {
            logger.error(baseLog(__filename, this.findAll.name, "Controller"));
            next(e);
        }
    }

    async updateOne(name: string, email: string, entry: Person): Promise<boolean> {
        return await this.personService.updateOne(name, email, entry);
    }

    async deleteOne(name: string, email: string): Promise<boolean> {
        return await this.personService.deleteOne(name, email);
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
    { name: "Carlos", email: "carlos@email.com" },
    { name: "Andres", email: "andres@gmail.conm" },
    { name: "Mone", email: "mone@email.com" }
];

const c = new PersonController();

// c.createOne(person).then((p) => console.log(p));
// c.createMany(people).then((p) => console.log(p));
// c.findOne(person.name, person.email).then((p) => console.log(p));
// c.findAll().then((p) => console.log(p));
// c.updateOne(person.name, person.email, person).then((p) => console.log(p));
c.deleteOne(person.name, person.email).then((p) => console.log(p));

 */

export { PersonController };
