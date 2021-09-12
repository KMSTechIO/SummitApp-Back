import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty} from 'class-validator';
import { Unique } from './../common';
import { EventEntity } from './event.entity';

export class EventPayload {
    @ApiProperty({
        required: true,
    })
    @Unique([EventEntity])
    @IsNotEmpty()
    title: string;

    @ApiProperty({
        required: false,
    })
    host: string;

    @ApiProperty({
        required: false,
    })
    city: string;

    @ApiProperty({
        required: false,
    })
    state: string;

    @ApiProperty({
        required: false,
    })
    date: string;

    @ApiProperty({
        required: false,
    })
    createdAt: string;

    @ApiProperty({
        required: false,
    })
    updatedAt: string;

    @ApiProperty({
        required: false,
    })
    createdBy: string;

    @ApiProperty({
        required: false,
    })
    updatedBy: string;

    @ApiProperty({
        required: false,
    })
    deviceType: string;

    @ApiProperty({
        required: false,
    })
    deviceId: string;
}
