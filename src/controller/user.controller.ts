import { Request, Response } from "express";
import { createNewUser, selectAllUsers } from "../repository/user.repository";
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
};

async function getAllUsers(req: Request, res: Response) {
  try {
    const responseDatabase = await selectAllUsers();

    if(!responseDatabase || responseDatabase?.length < 1) return res.status(406).send({ message: "Nenhum dado foi encontrado, ou não foi possível fazer a query" });

    return res.status(200).json({
      message: "Lista de usuários",
      list: responseDatabase
    });
  } catch (err: any) {
    return res.status(409).send({ error: err.name })
  }
}

export { postNewUser, getAllUsers };