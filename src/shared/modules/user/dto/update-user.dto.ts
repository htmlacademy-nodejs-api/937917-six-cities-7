import { UserRole } from '../../../types/index.js';

export class UpdateUserDto {
  public name?: string;
  public avatar?: string;
  role?: UserRole;
}
