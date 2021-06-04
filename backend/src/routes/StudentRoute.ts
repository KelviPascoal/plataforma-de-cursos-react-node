import { Router } from "express";
import { StudentController } from "../controllers/StudentController";

export const StudentRoute = Router();

StudentRoute.get("/students", StudentController.findAll);
StudentRoute.get("/students/:id", StudentController.findOneStudend);
StudentRoute.post("/students", StudentController.create);
StudentRoute.put("/students/:id", StudentController.update);
StudentRoute.delete("/students/:id", StudentController.switchOff);
