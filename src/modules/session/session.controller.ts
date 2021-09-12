import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SessionService } from './session.service';
import { SessionPayload } from './session.payload';

@Controller('api/sessions')
@ApiTags('session')
export class SessionController {
    constructor(private sessionService: SessionService) { }

    @ApiBearerAuth()
    @UseGuards(AuthGuard())
    @Get('all')
    @ApiResponse({ status: 200, description: 'Successful Response' })
    @ApiResponse({ status: 401, description: 'Unauthorized' })
    async showAllEvents() {
        return {
            data: await this.sessionService.showAll(),
        };
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard())
    @Post('create')
    @ApiResponse({ status: 200, description: 'Successful Response' })
    @ApiResponse({ status: 401, description: 'Unauthorized' })
    async create(@Body() payload: SessionPayload): Promise<any> {
        return await this.sessionService.create(payload);
    }
}