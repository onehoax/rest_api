const dbServerError: string = "DB SERVER CONNECTION ERROR";
const dbQueryError: string = "DB QUERY ERROR";
const dbUnknownError: string = "DB UNKNOWN ERROR";
const separator: string = "<>";

/**
 * Generate a custom error based on Prisma errors
 * @param generalError - A general translation from Prisma error
 * @param prismaCode - Prisma error code
 * @param prismaMsg - Prisma error message
 * @returns A combination of all of the parameters for the function
 */
function produceErrorMsg(generalError: string, prismaCode: string, prismaMsg: string): string {
    return `${generalError} ${separator} Prisma errorCode: ${prismaCode} ${separator} Prisma errorMessage: ${prismaMsg}`;
}

/**
 * Custom error
 * @prop message - Error message
 * @prop errorCode - Error code
 */
class MyError extends Error {
    errorCode: number;

    constructor(message: string, errorCode: number) {
        super(message);
        this.errorCode = errorCode;
    }

    /**
     * Base log message identifying the file and function in which it originated
     * @param file - File in which error originates
     * @param func - Function in which error originates
     * @param errorCode - Error code
     * @param errorMessage - Error message
     * @returns Generic log message identifying the file and function in which it originated
     */
    static baseLog(file: string, func: string, errorCode: string, errorMessage: string): string {
        return `In FILE: ${file} - In FUNCTION: ${func}: ${errorCode} - ${errorMessage}`;
    }

    /**
     * Decodes a Prisma error code and generates a general error message based on it
     * @param erroCode - Prisma error code
     * @param errorMessage - Prisma error message
     * @returns A general error message based on Prisma error code
     */
    static prismaError(erroCode: string, errorMessage: string): [number, string] {
        const code: number = parseInt(erroCode.substring(1));

        if (code >= 1000 && code <= 1017) return [500, produceErrorMsg(dbServerError, erroCode, errorMessage)];
        else if (code >= 2000 && code <= 2034) return [404, produceErrorMsg(dbQueryError, erroCode, errorMessage)];
        else return [500, produceErrorMsg(dbUnknownError, erroCode, errorMessage)];
    }
}

export { MyError };
