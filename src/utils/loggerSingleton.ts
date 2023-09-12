/* eslint-disable @typescript-eslint/no-unused-vars */
import "dotenv/config";
import { Logger, createLogger, format, transports } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

/**
 * Custom logger based on winston.
 * Uses the singleton design pattern so there is only 1 instance of MyLogger throughout the program.
 * @prop instance - To implement the singleton pattern
 * @prop logger - The custom winston logger
 */
class MyLogger {
    private static instance: MyLogger;
    private logger: Logger;

    /**
     * Private to implement the singleton pattern.
     * It is called only once at the beginning of a program.
     * The same instance is then shared across the entire program.
     * Initializes logger based on environment.
     */
    private constructor() {
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

        const logger: Logger = createLogger({
            level: "info"
        });

        if (env === "dev") logger.add(devTransport);

        if (env === "prod") logger.add(prodTransport);

        this.logger = logger;
    }

    /**
     * Checks if the single instance of "MyLogger" exists already.
     * If it doesn't, creates the single allowed instance and returns it.
     * Otherwise returns the already existing instance.
     * @returns {@link MyLogger.instance} - The single MyLogger instance
     */
    static getInstance(): MyLogger {
        if (!MyLogger.instance) MyLogger.instance = new MyLogger();

        return MyLogger.instance;
    }

    /**
     * Accessor for the custom winston logger object.
     * @returns {@link MyLogger.logger} - The custom winston logger
     */
    getLogger(): Logger {
        return this.logger;
    }
}

export { MyLogger };
