import { UserRole } from './user-role.type.js';

export type User = {
  name: string;
  email: string;
  avatar?: string;
  password: string;
  role: UserRole;
}
