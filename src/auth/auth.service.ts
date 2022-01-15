/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from 'src/user/user.service';
import { JWTTokenObject } from './interfaces/jwt.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.login(email, password);

    if (user) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload: JWTTokenObject = {
      id: user.id,
      username: user.username,
      email: user.email,
    };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
