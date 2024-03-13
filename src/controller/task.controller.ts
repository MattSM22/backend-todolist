import { Request, Response } from "express";
import { createNewTask, selectAllTasks } from "../repository/task.repository";
import { ITask } from "../types/task.types";

async function postNewTask(req: Request, res: Response) {
  const body: ITask = req.body;

  try {
    const responseDatabase = await createNewTask(body);

    if (!responseDatabase) {
      return res.status(406).send({ message: "Não foi possível criar essa task!" });
    }

    return res.status(200).json({
      message: "Task criada!",
      created: responseDatabase
    });
  } catch (err: any) {
    return res.status(409).send({ error: err.name });
  }
};

async function getAllTasks(req: Request, res: Response){
  try {
    const responseDatabase = await selectAllTasks();

    if (!responseDatabase || responseDatabase.length < 1) return res.status(406).send({ message: "Não foi possível trazer as tasks, ou esse usuário não possui nenhuma task cadastrada" });

    return res.status(200).json({
      message: "Lista de tasks",
      list: responseDatabase
    })
  } catch (err: any) {
    return res.status(409).send({ error: err.name });
  }
};

export { postNewTask, getAllTasks };