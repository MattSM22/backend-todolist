import { PrismaClient } from "@prisma/client";
import { IUser } from "../types/user.types";

const prisma = new PrismaClient({
  log: ["query", "error"]
});

async function createNewUser(user: IUser){
  const createUser = await prisma.user.create({
    data: user
  });

  if (!createUser) {
    return null;
  }

  return createUser;
};

async function selectAllUsers(){
  const selectUsers = await prisma.user.findMany();

  if(!selectUsers) {
    return null;
  }

  return selectUsers;
};

async function updateUser(idUser: string, user: IUser){
  const updatedUser = await prisma.user.update({
    where: {
      id: idUser
    },
    data: {
        name: user.name,
        email: user.email,
        password: user.password
      }
  });

  if(!updateUser) return null

  return updatedUser;
}

export { createNewUser, selectAllUsers, updateUser };