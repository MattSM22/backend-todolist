import express from "express";
import TaskRouter from "./routes/task.routes";
import UserRouter from "./routes/user.routes";

const app = express();

app.use(express.json());

app.use("/tasks", TaskRouter);
app.use("/users", UserRouter);

app.listen(3000, () => {
  console.log("Server is RUNNING 🚀!");
});