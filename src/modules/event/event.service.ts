import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository, Like, In, EntityManager } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './event.entity';

@Injectable()
export class EventService {
    constructor(
        @InjectRepository(Event)
        private readonly eventRepository: Repository<Event>
    ) { }
}