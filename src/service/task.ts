import { Task } from "../model/task.js";
import * as repo from "../repository/task.js";

async function findAll(): Promise<Task[]> {
    return await repo.findAll();
}

async function findTasksByUser(name: string, email: string): Promise<Task[]> {
    return await repo.findTasksByUser(name, email);
}

async function createTaskForUser(name: string, email: string, entry: Task): Promise<boolean> {
    return await repo.createTaskForUser(name, email, entry);
}

async function deleteTasksByUser(name: string, email: string): Promise<boolean> {
    return await repo.deleteTasksByUser(name, email);
}

export { findAll, findTasksByUser, createTaskForUser, deleteTasksByUser };
