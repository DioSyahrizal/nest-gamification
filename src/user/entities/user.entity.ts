import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum MenuEnum {
  LOCK = 'lock',
  OPEN = 'open',
}

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ nullable: false, length: 50 })
  name: string;

  @Column({ nullable: false, length: 20 })
  username: string;

  @Column({ unique: true, nullable: false, length: 50 })
  email: string;

  @Column({ nullable: false, length: 255 })
  password: string;

  @Column({ type: 'text', nullable: false })
  address: string;

  @Column({ type: 'bigint', default: 1500, nullable: false })
  point: number;

  @Column({ type: 'bigint', default: 200, nullable: false })
  coin: number;

  @Column({
    type: 'enum',
    enum: MenuEnum,
    default: MenuEnum.LOCK,
    nullable: false,
  })
  fis_med: string;

  @Column({
    type: 'enum',
    enum: MenuEnum,
    default: MenuEnum.LOCK,
    nullable: false,
  })
  fis_hard: string;

  @Column({
    type: 'enum',
    enum: MenuEnum,
    default: MenuEnum.LOCK,
    nullable: false,
  })
  kim_med: string;

  @Column({
    type: 'enum',
    enum: MenuEnum,
    default: MenuEnum.LOCK,
    nullable: false,
  })
  kim_hard: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER,
    nullable: false,
  })
  role: string;

  @Column({ type: 'bigint', default: 0, nullable: false })
  questcounter: string;

  @Column({ nullable: false, length: 100 })
  sekolah: string;

  @Column({ nullable: false, length: 100 })
  nohp: string;
}
