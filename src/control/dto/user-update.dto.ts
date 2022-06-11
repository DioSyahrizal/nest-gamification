import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNumber, IsString } from 'class-validator';

export class UserUpdateDto {
  @ApiProperty({ example: 'asd123' })
  @IsString()
  id: string;

  @ApiProperty({ example: 'dio123' })
  @IsString()
  username: string;

  @ApiProperty({ example: 'Dio Syah' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'dio@gami.ai' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Malang' })
  @IsString()
  address: string;

  @ApiProperty({ example: 1000 })
  @IsNumber()
  point: number;

  @ApiProperty({ example: 10 })
  @IsNumber()
  coin: number;

  @ApiProperty({ example: '08123445' })
  @IsNumber()
  nohp: string;
}
