/* eslint-disable @typescript-eslint/no-unused-vars */
import { connect } from "../config/dbConfig.js";
import { Logger } from "winston";
import { MyLogger } from "../utils/logger.js";
import { Task } from "../model/task.js";

class TaskRepository {
    private logger: Logger;

    constructor() {
        const myLogger: MyLogger = new MyLogger();
        this.logger = myLogger.getLogger();

        this.logger.info(`${TaskRepository.name}`);
        this.logger.warn(`${TaskRepository.name}`);
        this.logger.error(`${TaskRepository.name}`);
    }
}

const tmp = new TaskRepository();
