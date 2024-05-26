import { UserRole } from './user-role.type.js';

export type User = {
  name: string;
  email: string;
  password: string;
  avatar?: string;
  role: UserRole;
}
