import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { RegisterUserDto } from 'src/auth/dto/register.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private saltRounds: number;

  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {
    this.saltRounds = parseInt(process.env.SALT_ROUND, 10) || 10;
  }

  async findOne(username: string) {
    const data = await this.userRepo.findOne({ username });
    if (data) {
      return data;
    } else {
      throw null;
    }
  }

  async getUserById(id: string) {
    const data = await this.userRepo.findOne(id);
    if (data) {
      delete data.password;
    }
    return data;
  }

  async register(createUserData: RegisterUserDto) {
    const data: Partial<User> = { ...createUserData };
    data.password = await this.hashPassword(data.password);
    const user = await this.userRepo.save(data);
    delete user.password;
    return user;
  }

  async login(email: string, password: string): Promise<any> {
    const user = await this.userRepo.findOne({ email });
    if (!user) {
      return null;
    }

    const equalPassword = bcrypt.compare(password, user.password);

    if (!equalPassword) {
      return null;
    }
    delete user.password;
    return user;
  }

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, this.saltRounds);
  }
}
