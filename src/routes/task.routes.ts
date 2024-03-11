import { Router } from "express";
import { postNewTask } from "../controller/task.controller";

const TaskRouter = Router();

TaskRouter.post("/create", postNewTask);

export default TaskRouter;