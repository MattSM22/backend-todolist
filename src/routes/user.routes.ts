import { Router } from "express";
import { postNewUser } from "../controller/user.controller";
import TaskRouter from "./task.routes";

const UserRouter = Router();

UserRouter.post("/create", postNewUser);

export default UserRouter;