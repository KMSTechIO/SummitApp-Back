import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EventService } from './event.service';
import { EventPayload } from './event.payload';

@Controller('api/events')
@ApiTags('eventData')
export class EventController {
    constructor(private eventService: EventService) { }

    @ApiBearerAuth()
    @UseGuards(AuthGuard())
    @Get('all')
    @ApiResponse({ status: 200, description: 'Successful Response' })
    @ApiResponse({ status: 401, description: 'Unauthorized' })
    async showAllEvents() {
        return {
            data: await this.eventService.showAll(),
        };
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard())
    @Post('create')
    @ApiResponse({ status: 200, description: 'Successful Response' })
    @ApiResponse({ status: 401, description: 'Unauthorized' })
    async create(@Body() payload: EventPayload): Promise<any> {
        return await this.eventService.create(payload);
    }
}