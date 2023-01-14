import { Repositorios } from "./repos.model";
import { User } from "./user.model";

export interface gitUser {
  userData: User;
  repoData: Array<Repositorios>;
}
