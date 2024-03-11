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

export { createNewUser, selectAllUsers };