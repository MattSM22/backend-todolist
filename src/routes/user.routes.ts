import { Router } from "express";
import { postNewUser, getAllUsers } from "../controller/user.controller";

const UserRouter = Router();

UserRouter.post("/create", postNewUser);
UserRouter.get("/list", getAllUsers);

export default UserRouter;