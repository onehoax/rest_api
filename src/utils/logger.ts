/* eslint-disable @typescript-eslint/no-unused-vars */
import "dotenv/config";
import { Logger, createLogger, format, transports } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const env: string = process.env["NODE_ENV"]!;

const myFormat = {
    format: "YYYY.MM.DD-HH:mm"
};

const devTransport: transports.ConsoleTransportInstance = new transports.Console({
    format: format.combine(format.colorize(), format.timestamp(myFormat), format.simple())
});

const prodTransport: DailyRotateFile = new DailyRotateFile({
    filename: "./logs/app_%DATE%.log",
    datePattern: "YYYY_MM_DD",
    zippedArchive: true,
    maxSize: "20m",
    maxFiles: "14d",
    format: format.combine(format.timestamp(myFormat), format.json())
});

class MyLogger {
    private logger: Logger;

    constructor() {
        const logger: Logger = createLogger({
            level: "info"
        });

        if (env === "dev") logger.add(devTransport);

        if (env === "prod") logger.add(prodTransport);

        this.logger = logger;
    }

    getLogger(): Logger {
        return this.logger;
    }
}

export { MyLogger };
