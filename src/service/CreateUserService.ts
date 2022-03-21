import { UsersRepositories } from "../repositories/UserRepositories";
import { getCustomRepository } from "typeorm";
import { genSalt, hash } from "bcryptjs";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class CreateUserService {
  async execute({ name, email, admin = false, password }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    const correctEmail = email.includes("@test.com");

    if (!email || !correctEmail) {
      throw new Error("Incorrect Email");
    }

    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      throw new Error("User Already Exists");
    }

    const passwordHash = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      admin,
      password: passwordHash,
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };