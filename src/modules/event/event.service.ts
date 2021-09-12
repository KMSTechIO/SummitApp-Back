import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EventEntity } from './event.entity';
@Injectable()
export class EventService {
    constructor(
        @InjectRepository(EventEntity)
        private eventRepository: Repository<EventEntity>,
    ) { }

    async showAll() {
        return await this.eventRepository.find();
    }

    async create(data) {        
        const eventObj = this.eventRepository.create(data);
        await this.eventRepository.save(data);
        return eventObj;
    }
}