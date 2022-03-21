import { NextFunction, Request, Response } from "express";
import { UsersRepositories } from "../repositories/UserRepositories";
import { getCustomRepository } from "typeorm";

async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user_id } = request;
  const usersRepositories = getCustomRepository(UsersRepositories);

  const { admin } = await usersRepositories.findOne(user_id);

  if (admin) {
    return next();
  }

  return response.status(401).json({
    error: "User Unauthorized",
  });
}

export { ensureAdmin };
