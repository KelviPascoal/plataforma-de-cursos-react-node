import { Router } from "express";
import { CourserController } from "../controllers/CouseController";

export const CouserRoute = Router();

CouserRoute.get("/coursers", CourserController.findAll);
CouserRoute.get("/coursers/:id", CourserController.findOneCourser);
CouserRoute.post("/coursers", CourserController.create);
CouserRoute.put("/coursers/:id", CourserController.update);
CouserRoute.delete("/coursers/:id", CourserController.switchOff);
