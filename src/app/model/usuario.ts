import {UserRole} from "./enums/userRole";

export interface Usuario{
  id: string;
  login: string;
  password: string;
  role: UserRole;
}
