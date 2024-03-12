import { Router } from "express";
import { postNewUser, getAllUsers, alterUser, removeUser } from "../controller/user.controller";

const UserRouter = Router();

UserRouter.post("/create", postNewUser);
UserRouter.put("/alter/:id", alterUser);
UserRouter.delete("/delete/:id", removeUser);
UserRouter.get("/list", getAllUsers);

export default UserRouter;