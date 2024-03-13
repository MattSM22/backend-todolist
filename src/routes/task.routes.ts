import { Router } from "express";
import { alterTask, getAllTasks, postNewTask, removeTask } from "../controller/task.controller";

const TaskRouter = Router();

TaskRouter.post("/create", postNewTask);
TaskRouter.get("/list", getAllTasks);
TaskRouter.put("/update/:id", alterTask);
TaskRouter.delete("/delete/:id", removeTask);

export default TaskRouter;