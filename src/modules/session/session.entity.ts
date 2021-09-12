import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

/*
Table sessions {
  id int [pk, increment] 
  sessionTitle varchar
  sessionHost varchar
  sessionTime datetime
  sessionKeyNote varchar
}
*/

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
}
