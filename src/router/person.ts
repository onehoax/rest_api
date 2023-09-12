/* eslint-disable @typescript-eslint/no-unused-vars */
import express from "express";
import * as controller from "../controller/person.js";

const router: express.Router = express.Router();

router.get("/", controller.findAll);
router.get("/:name/:email", controller.findOne);
router.post("/", controller.createOne);
router.put("/", controller.updateOne);
router.delete("/:name/:email", controller.deleteOne);
router.use("*", (req: express.Request, res: express.Response, next: express.NextFunction): void => {
    res.send("MAKE SURE THE URL IS CORRECT!!!");
});

export { router as peopleRouter };
