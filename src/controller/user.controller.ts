import { Request, Response } from "express";
import { createNewUser } from "../repository/user.repository";
import { IUser } from "../types/user.types";

async function postNewUser(req: Request, res: Response){
  const body: IUser = req.body;

  try {
    const responseDatabase = await createNewUser(body);

    if (!responseDatabase) return res.status(406).send({ message: "Não foi possível criar o usuário!" });

    return res.status(200).json({
      message: "Usuário criado!",
      created: responseDatabase
    });
  } catch (err: any) {
    return res.status(409).send({ error: err.name })
  }
}

export { postNewUser };