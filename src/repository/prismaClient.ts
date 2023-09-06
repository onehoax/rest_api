/**
 * Use a single PrismaClient instance across app
 * The Prisma object contains types (to be used for error type checking)
 */
import { PrismaClient, Prisma } from "@prisma/client";

const client: PrismaClient = new PrismaClient();

export { Prisma, client };
