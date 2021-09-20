import { Module } from '@nestjs/common';
import { SessionController } from './session.controller';
import { SessionService } from './session.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionEntity } from './session.entity';
import { PassportModule } from '@nestjs/passport';
import { EventEntity } from 'modules/event/event.entity';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        TypeOrmModule.forFeature([SessionEntity, EventEntity])
    ],
    controllers: [SessionController],
    providers: [SessionService],
    exports: [SessionService]
})
export class SessionModule { }