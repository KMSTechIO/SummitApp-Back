import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne
} from 'typeorm';
import { EventEntity } from 'modules/event/event.entity'

@Entity('sessions')
export class SessionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  sessionTitle: string;

  @Column({ nullable: true })
  sessionHost: string;

  @Column({ nullable: true })
  sessionTime: string;

  @Column({ nullable: true })
  sessionKeyNote: string;

  @Column({ nullable: true })
  expertiseLabel: string;

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

  @ManyToOne(() => EventEntity, (event)=>event.sessions)
  event: EventEntity;
}
