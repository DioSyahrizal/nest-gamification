import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserSoal } from 'src/entities/usersoal.entity';
import { User } from 'src/user/entities/user.entity';
import { Not, Repository } from 'typeorm';
import { UserUpdateDto } from './dto/user-update.dto';

@Injectable()
export class ControlService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    @InjectRepository(UserSoal)
    private readonly userSoalRepo: Repository<UserSoal>,
  ) {}

  async findUserId(id: string) {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) {
      return null;
    }
    return user;
  }

  async getUserDeletePass(user: User) {
    const tempUser = { ...user };
    delete tempUser.password;
    return tempUser;
  }

  async countUserSoal() {
    const countUser = await this.userRepo.count({
      where: { role: Not('admin') },
    });

    const countSoal = await this.userSoalRepo.count({
      where: { result: Not('') },
    });

    return { countUser, countSoal };
  }

  async getAllUser() {
    const users = await this.userRepo.find();
    if (users) {
      for (const x in users) {
        delete users[x].password;
        delete users[x].role;
      }
    }
    return users;
  }

  async updateUser(userDto: UserUpdateDto) {
    const id = userDto.id;
    const userId = await this.findUserId(id);

    if (!userId) {
      throw new NotFoundException();
    }

    const updateData = { ...userDto };
    delete updateData.id;
    await this.userRepo.update(id, updateData);
    return { status: 'ok' };
  }

  async updateFisikaMed(id: string) {
    const userId = await this.findUserId(id);
    if (!userId) {
      throw new NotFoundException();
    }

    const menu = await this.userRepo
      .update(id, { fis_med: 'open' })
      .then(async () => {
        const user = this.getUserDeletePass(await this.userRepo.findOne(id));
        return user;
      });
    return menu;
  }

  async updateFisikaHard(id: string) {
    const userId = await this.findUserId(id);
    if (!userId) {
      throw new NotFoundException();
    }

    const menu = await this.userRepo
      .update(id, { fis_hard: 'open' })
      .then(async () => {
        const user = this.getUserDeletePass(await this.userRepo.findOne(id));
        return user;
      });
    return menu;
  }
}
