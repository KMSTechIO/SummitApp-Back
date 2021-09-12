import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('events')
export class EventEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    title: string;

    @Column({ nullable: true })
    host: string;

    @Column({ nullable: true })
    city: string;

    @Column({ nullable: true })
    state: string;

    @Column({ type: 'timestamp', nullable: true })
    date: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: string;

    @Column({ type: 'timestamp', nullable: true })
    updatedAt: string;

    @Column({ nullable: true })
    createdBy: string;

    @Column({ nullable: true })
    updatedBy: string;

    @Column({ nullable: true })
    deviceType: string;

    @Column({ nullable: true })
    deviceId: string;
}
