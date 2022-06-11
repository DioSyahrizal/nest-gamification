import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum ResultEnum {
  TRUE = 'true',
  FALSE = 'false',
}

@Entity()
export class UserSoal {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false, length: 255 })
  id_user: string;

  @Column({ nullable: false })
  id_soal: number;

  @Column({ type: 'enum', enum: ResultEnum, nullable: true })
  result: string;

  @Column({ nullable: false, length: 10 })
  matpel: string;

  @Column({ nullable: false, length: 10 })
  level: string;
}
