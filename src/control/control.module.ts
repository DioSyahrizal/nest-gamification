import { Module } from '@nestjs/common';
import { ControlService } from './control.service';
import { ControlController } from './control.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { UserSoal } from 'src/entities/usersoal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserSoal])],
  controllers: [ControlController],
  providers: [ControlService],
})
export class ControlModule {}
