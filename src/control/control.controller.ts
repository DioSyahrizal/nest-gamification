import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ControlService } from './control.service';
import { ControlCountResponse } from './dto/controlcount.dto';
import { UserUpdateDto } from './dto/user-update.dto';

@ApiTags('User Control')
@Controller('control')
export class ControlController {
  constructor(private readonly controlService: ControlService) {}

  @ApiResponse({
    status: 200,
    description: 'Return status ok',
    type: ControlCountResponse,
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get('count')
  async count(@Request() req: any) {
    console.log('User: ', req.user);
    const countControl = await this.controlService.countUserSoal();
    return countControl;
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get('user')
  async getAllUser() {
    const users = await this.controlService.getAllUser();
    return users;
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Put('user')
  async updateUser(@Body() userDto: UserUpdateDto) {
    try {
      const updatedUser = await this.controlService.updateUser(userDto);
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  @Put('fis_med/:id')
  async updateFisikaMed(@Param('id') id: string) {
    try {
      const menu = await this.controlService.updateFisikaMed(id);
      return menu;
    } catch (error) {
      throw error;
    }
  }

  @Put('fis_hard/:id')
  async updateFisikaHard(@Param('id') id: string) {
    try {
      const menu = await this.controlService.updateFisikaHard(id);
      return menu;
    } catch (error) {
      throw error;
    }
  }
}
