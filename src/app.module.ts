import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ormConfig } from './config/database.config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PusherService } from './pusher.service';
import { ControlModule } from './control/control.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    UserModule,
    AuthModule,
    ControlModule,
  ],
  controllers: [AppController],
  providers: [AppService, PusherService],
})
export class AppModule {}
