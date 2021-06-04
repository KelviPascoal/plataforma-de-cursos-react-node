import { Router } from "express";
import { LessonController } from "../controllers/LessonController";

export const LessonRoute = Router();

LessonRoute.get("/lessons", LessonController.findAll);
LessonRoute.get("/lessons/:id", LessonController.findOneLesson);
LessonRoute.post("/lessons", LessonController.create);
LessonRoute.put("/lessons/:id", LessonController.update);
LessonRoute.delete("/lessons/:id", LessonController.switchOff);
