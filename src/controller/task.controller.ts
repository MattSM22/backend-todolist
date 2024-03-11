import { Request, Response } from "express";
import { createNewTask } from "../repository/task.repository";
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
}

export { postNewTask };