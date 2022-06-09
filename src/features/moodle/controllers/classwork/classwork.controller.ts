import { Body, Controller, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { EachMessagePayload } from 'kafkajs';
import { ClassWork } from 'src/model/classwork';
import { ClassworkService } from '../../services/classwork/classwork.service';

@Controller('classwork')
export class ClassworkController {
    constructor(
        private _clasWorkService: ClassworkService
    ) {}

    @Post()
    save(@Body() classWork: ClassWork): void {
        classWork.id = randomUUID();
        this._clasWorkService.save(classWork).then(console.log);
    }

    async handleMessage(message: EachMessagePayload) {
        const msg: Buffer = Buffer.from(message.message.value);
        console.log(`[${new Date().toISOString()}] [${message.topic}] ${msg.toString()}`);
    }
}
