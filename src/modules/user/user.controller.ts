import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './user.service';
import { User } from './user.entity';

@Controller('api/attendees')
@ApiTags('attendees')
export class UserController {
    constructor(private userService: UsersService) { }

    @ApiBearerAuth()
    @UseGuards(AuthGuard())
    @Get('all')
    @ApiResponse({ status: 200, description: 'Successful Response' })
    @ApiResponse({ status: 401, description: 'Unauthorized' })
    async showAllEvents() {
        return {
            data: await this.userService.getAll(),
        };
    }
}