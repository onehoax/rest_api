/* eslint-disable @typescript-eslint/no-unused-vars */
import { Logger } from "winston";
import { MyLogger } from "../utils/logger.js";
import { PrismaClient } from "@prisma/client";

const logger: Logger = MyLogger.getInstance().getLogger();

const prisma = new PrismaClient();

async function main() {
    // await prisma.tasks.create({
    //     data: {
    //         name: "Andres Osorio",
    //         created_by: "Andres"
    //     }
    // });

    const allPeople = await prisma.people.findMany();
    console.log(allPeople);
    const allTasks = await prisma.tasks.findMany();
    console.log(allTasks);

    // const post = await prisma.tasks.update({
    //     where: { id: 1 },
    //     data: { description: "Some random task" }
    // });
    // console.log(post);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        logger.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
