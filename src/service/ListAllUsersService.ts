import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories";
class ListAllUsersService {
  async execute() {
    const usersRepository = getCustomRepository(UsersRepositories);

    const findAllUsers = await usersRepository.find();

    return findAllUsers;
  }
}

export { ListAllUsersService };
