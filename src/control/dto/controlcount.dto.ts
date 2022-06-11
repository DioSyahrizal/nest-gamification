import { ApiProperty } from '@nestjs/swagger';

export class ControlCountResponse {
  @ApiProperty({ example: 2 })
  readonly countUser: number;

  @ApiProperty({ example: 3 })
  readonly countSoal: number;
}
