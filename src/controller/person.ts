/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from "express";
import { Person } from "../model/person.js";
import { PersonService } from "../service/person.js";

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

    async findOne(name: string, email: string): Promise<Person | null> {
        return await this.personService.findOne(name, email);
    }

    async findAll(): Promise<Person[]> {
        return await this.personService.findAll();
    }

    async updateOne(name: string, email: string, entry: Person): Promise<boolean> {
        return await this.personService.updateOne(name, email, entry);
    }

    async deleteOne(name: string, email: string): Promise<boolean> {
        return await this.personService.deleteOne(name, email);
    }
}

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

export { PersonController };
