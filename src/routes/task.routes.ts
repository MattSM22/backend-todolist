import { Router } from "express";
import { getAllTasks, postNewTask } from "../controller/task.controller";

const TaskRouter = Router();

TaskRouter.post("/create", postNewTask);
TaskRouter.get("/list", getAllTasks)

export default TaskRouter;