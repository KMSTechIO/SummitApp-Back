import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EventEntity } from './event.entity';
import { SessionService } from 'modules/session/session.service';
@Injectable()
export class EventService {
    constructor(
        @InjectRepository(EventEntity)
        private eventRepository: Repository<EventEntity>,
        private sessionService: SessionService
    ) { }

    async showAll() {
        const eventArray = await this.eventRepository.find();

        let responseArray = [];
        for (let index = 0; index < eventArray.length; index++) {
            const eventItem = eventArray[index];
            eventItem.sessions = await this.sessionService.getSessionsByEventId(eventItem.id);
            responseArray.push(eventItem);
        }
        return responseArray;
    }

    async create(data) {
        const eventData = await this.eventRepository.save(data);
        return eventData;
    }
}