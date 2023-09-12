import { Person } from "../model/person.js";
import * as repo from "../repository/person.js";

async function createOne(entry: Person): Promise<boolean> {
    return await repo.createOne(entry);
}

async function createMany(entries: Person[]): Promise<number> {
    return await repo.createMany(entries);
}

async function findOne(name: string, email: string): Promise<Person | null> {
    return await repo.findOne(name, email);
}

async function findAll(): Promise<Person[]> {
    return await repo.findAll();
}

async function updateOne(name: string, email: string, entry: Person): Promise<boolean> {
    return await repo.updateOne(name, email, entry);
}

async function deleteOne(name: string, email: string): Promise<boolean> {
    return await repo.deleteOne(name, email);
}

export { createOne, createMany, findOne, findAll, updateOne, deleteOne };
