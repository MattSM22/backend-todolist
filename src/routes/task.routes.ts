import { Router } from "express";
import { alterTask, getAllTasks, postNewTask } from "../controller/task.controller";

const TaskRouter = Router();

TaskRouter.post("/create", postNewTask);
TaskRouter.get("/list", getAllTasks);
TaskRouter.put("/update/:id", alterTask);

export default TaskRouter;