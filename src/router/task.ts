/* eslint-disable @typescript-eslint/no-unused-vars */
import express from "express";
import * as controller from "../controller/task.js";

const router: express.Router = express.Router();

router.get("/", controller.findAll);
router.get("/:name/:email", controller.findTasksByUser);
router.post("/:name/:email", controller.createTaskForUser);
router.delete("/:name/:email", controller.deleteTasksByUser);
router.use("*", (req: express.Request, res: express.Response, next: express.NextFunction): void => {
    res.send("MAKE SURE THE URL IS CORRECT!!!");
});

export { router as tasksRouter };
