/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dialect } from "sequelize";
import { Sequelize } from "sequelize-typescript";
import { Task } from "../model/task.js";
import "dotenv/config";

function connect(): Sequelize {
    const hostName: string = process.env["HOST"]!;
    const userName: string = process.env["USR"]!;
    const password: string = process.env["PASSWORD"]!;
    const database: string = process.env["DB"]!;
    const dialect: Dialect = <Dialect>process.env["DIALECT"]!;

    const sequelize = new Sequelize(database, userName, password, {
        host: hostName,
        dialect: dialect
        // repositoryMode: true,
    });

    sequelize.addModels([Task]);

    return sequelize;
}

export { connect };
