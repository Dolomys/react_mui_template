import { User } from '../user/user.model';

export interface AuthenticationResponseDto {
  user: User;
  accessToken: string;
}
