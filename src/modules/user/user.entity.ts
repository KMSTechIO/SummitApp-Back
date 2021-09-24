import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PasswordTransformer } from './password.transformer';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  firstName: string;

  @Column({ length: 255 })
  lastName: string;

  @Column({ length: 255 })
  email: string;

  @Column({
    name: 'password',
    length: 255,
    transformer: new PasswordTransformer(),
  })
  password: string;

  toJSON() {
    const { password, ...self } = this;
    return self;
  }

  @Column()
  addressLine1: string;

  @Column({ nullable: true })
  addressLine2: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zip: string;

  @Column()
  phone: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ nullable: true })
  createdBy: string;

  @Column({ nullable: true })
  updatedBy: string;

  @Column({ nullable: true })
  deviceType: string;

  @Column({ nullable: true })
  deviceId: string;

  @Column({ nullable: true })
  avatarURL: string;
}

export class UserFillableFields {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zip:string;
  phone: string;
  createdBy: string;
  updatedBy: string;
  deviceType: string;
  deviceId: string;
  avatarURL:string;
}
