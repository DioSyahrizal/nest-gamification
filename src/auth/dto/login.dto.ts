import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'jeff@amazon.com' })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({ example: 'q1w2e3r4' })
  @IsNotEmpty()
  @IsString()
  password: string;
}
