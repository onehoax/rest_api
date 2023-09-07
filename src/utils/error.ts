import { Prisma } from "../repository/prismaClient.js";

/**
 * ============================== Custom Error ==============================
 */

/**
 * Custom error
 * @prop message - Error message
 * @prop errorCode - Error code
 */
class MyError extends Error {
    errorCode: number;

    constructor(errorCode: number, message: string) {
        super(message);
        this.errorCode = errorCode;
    }
}

/**
 * ============================== Log and Error Utils ==============================
 */

const dbServerError: string = "DB SERVER CONNECTION ERROR";
const dbQueryError: string = "DB QUERY ERROR";
const dbUnknownError: string = "DB UNKNOWN ERROR";
const prismaUnknownAbsentCode: string = "P-1";

/**
 * Base log message identifying the file and function in which it originated
 * @param file - File in which error originates
 * @param func - Function in which error originates
 * @param errorCode - Error code
 * @param errorMessage - Error message
 * @returns Generic log message identifying the file and function in which it originated
 */
function baseLog(file: string, func: string, source?: string, code?: string): string {
    return `In FILE: ${file} - In FUNCTION: ${func} - SOURCE: ${source} - CODE: ${code}`;
}

/**
 * Generate a custom error based on error from another source
 * @param generalError - A general translation from original error
 * @param errorSource - Source of the error
 * @param errorCode - Error code
 * @param errorMsg - Error message
 * @returns A combination of all of the parameters for the function
 */
function produceErrorMsg(generalError: string, errorSource: string, errorCode: string, errorMsg: string): string {
    return `${generalError} <> ${errorSource} errorCode: ${errorCode} <> ${errorSource} errorMessage: ${errorMsg}`;
}

/**
 * Decodes a Prisma error code and generates a general error message based on it
 * @remarks P1000 - P1017: Prisma common errors (DB connection related); P2000 - P2034: Prisma query engine errors
 * @param erroCode - Prisma error code
 * @param errorMessage - Prisma error message
 * @returns A general error message based on Prisma error code
 */
function translatePrismaError(erroCode: string, errorMessage: string): [number, string] {
    const code: number = parseInt(erroCode.substring(1));

    if (code >= 1000 && code <= 1017) return [500, produceErrorMsg(dbServerError, "Prisma", erroCode, errorMessage)];
    else if (code >= 2000 && code <= 2034)
        return [404, produceErrorMsg(dbQueryError, "Prisma", erroCode, errorMessage)];
    else return [500, produceErrorMsg(dbUnknownError, "Prisma", erroCode, errorMessage)];
}

function handlePrismaError(
    e:
        | Prisma.PrismaClientKnownRequestError
        | Prisma.PrismaClientUnknownRequestError
        | Prisma.PrismaClientRustPanicError
        | Prisma.PrismaClientInitializationError
        | Prisma.PrismaClientValidationError
): string {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
        const errorCodeAndMsg: [number, string] = translatePrismaError(e.code, e.message);
        throw new MyError(errorCodeAndMsg[0], errorCodeAndMsg[1]);
    } else if (e instanceof Prisma.PrismaClientInitializationError) {
        const code: string = e.errorCode ? e.errorCode : prismaUnknownAbsentCode; // Use "P-1" if errorCode not present
        const errorCodeAndMsg: [number, string] = translatePrismaError(code, e.message);
        throw new MyError(errorCodeAndMsg[0], errorCodeAndMsg[1]);
    } else {
        const errorCodeAndMsg: [number, string] = translatePrismaError(prismaUnknownAbsentCode, e.message);
        throw new MyError(errorCodeAndMsg[0], errorCodeAndMsg[1]);
    }
}

export { MyError, baseLog, handlePrismaError };
