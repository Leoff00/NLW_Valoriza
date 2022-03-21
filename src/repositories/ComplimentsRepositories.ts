import { Compliment } from "../entities/Compliment";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Compliment)
class ComplimentsRepositories extends Repository<Compliment> {}

export { ComplimentsRepositories };
