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

  if (!createTask) return null;

  return createTask;
};

async function selectAllTasks(){
  const listTask = await prisma.task.findMany();

  if(!listTask) return null;

  return listTask;
}; 

async function updateTask(idTask: string, task: ITask){
  const updatedTask = await prisma.task.update({
    where: {
      id: idTask
    },
    data: {
      userId: task.idUser,
      isFinalized: task.isFinalized,
      content: task.content
    }
  });

  if (!updatedTask) return null;

  return updatedTask;
};

export { createNewTask, selectAllTasks, updateTask };