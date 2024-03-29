import { Request, Response } from "express";
import { createNewTask, deleteTask, selectAllTasks, updateTask } from "../repository/task.repository";
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

async function alterTask(req: Request, res: Response){
  const idTask: string = req.params.id;
  const body: ITask = req.body;

  try {
    const responseDatabase = await updateTask(idTask, body);

    if (!responseDatabase) return res.status(406).send({ message: "Não foi possível fazer a atualização dessa task" });
    
    return res.status(200).json({
      message: "Task atualizada!",
      task: responseDatabase
    });
  } catch (err: any) {
    return res.status(409).send({ error: err.name });
  }
};

async function removeTask(req: Request, res: Response){
  const idTask: string = req.params.id;

  try {
    const responseDatabase = await deleteTask(idTask);

    if (!responseDatabase) return res.status(406).send({ message: "Não foi possível remover essa task" });

    return res.status(200).json({
      message: "Task removida!",
      task: responseDatabase
    });
  } catch (err: any) {
    return res.status(409).send({ error: err.name });
  }
};

export { postNewTask, getAllTasks, alterTask, removeTask };