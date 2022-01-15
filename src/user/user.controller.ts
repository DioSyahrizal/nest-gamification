import {
  Controller,
  Get,
  Param,
  UseGuards,
  Request,
  Post,
  Body,
  HttpException,
  ForbiddenException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { RegisterUserDto } from 'src/auth/dto/register.dto';
import { JWTTokenObject } from 'src/auth/interfaces/jwt.dto';
import { UserService } from './user.service';

@ApiTags('User Management')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() body: RegisterUserDto) {
    try {
      const user = await this.userService.register(body);
      return user;
    } catch (err) {
      if (err.message.includes('Duplicate')) {
        throw new HttpException(
          { status: 'error', error: 'Failed sign up. Email is already taken' },
          400,
        );
      } else {
        throw new HttpException({ status: 'error', error: err.message }, 400);
      }
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async getUser(@Param('id') id: string, @Request() req: any) {
    const user: JWTTokenObject = req.user;

    if (id !== user.id) {
      throw new ForbiddenException();
    }

    const data = await this.userService.getUserById(id);
    return { data };
  }
}
