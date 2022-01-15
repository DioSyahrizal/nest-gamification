import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterUserDto {
  @ApiProperty({ example: 'Jeff Bezos' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'dio123' })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ example: 'jeff@amazon.yes' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'yeathisispassword' })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({ example: '41 Boelevard' })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({ example: 'Amazon High School' })
  @IsNotEmpty()
  @IsString()
  sekolah: string;

  @ApiProperty({ example: '081234' })
  @IsNotEmpty()
  @IsString()
  nohp: string;
}
