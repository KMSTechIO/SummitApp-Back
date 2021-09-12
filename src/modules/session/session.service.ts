import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SessionEntity } from './session.entity';
@Injectable()
export class SessionService {
    constructor(
        @InjectRepository(SessionEntity)
        private sessionRepository: Repository<SessionEntity>,
    ) { }

    async showAll() {
        return await this.sessionRepository.find();
    }

    async create(data) {        
        const sessionObj = this.sessionRepository.create(data);
        await this.sessionRepository.save(data);
        return sessionObj;
    }
}