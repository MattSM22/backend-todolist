import { PrismaClient } from "@prisma/client";
import { ITask } from "../types/task.types";

const prisma = new PrismaClient({
  log: ["query", "error"]
});

async function createNewTask(task: ITask){
  const createTask = await prisma.task.create({
    data: {
      content: task.content,
      isFinalized: task.isFinalized,
      userId: task.idUser
    }
  });

  if (!createTask) {
    return null;
  }

  return createTask;
};

export { createNewTask };