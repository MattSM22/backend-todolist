import { Router } from "express";
import { postNewUser, getAllUsers, alterUser } from "../controller/user.controller";

const UserRouter = Router();

UserRouter.post("/create", postNewUser);
UserRouter.put("/alter/:id", alterUser);
UserRouter.get("/list", getAllUsers);

export default UserRouter;