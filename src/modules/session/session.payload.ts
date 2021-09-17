import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty} from 'class-validator';

export class SessionPayload {
    @ApiProperty({
        required: true,
    })
    @IsNotEmpty()
    sessionTitle: string;

    @ApiProperty({
        required: true,
    })
    @IsNotEmpty()
    sessionHost: string;

    @ApiProperty({
        required: true,
    })
    @IsNotEmpty()
    sessionTime: string;

    @ApiProperty({
        required: false,
    })
    sessionKeyNote: string;

    @ApiProperty({
        required: false,
    })
    expertiseLabel: string;

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

    @ApiProperty({
        required: true,
    })
    @IsNotEmpty()
    event: number;
}
