import { Body, Controller, Post } from '@nestjs/common';
import { EachMessagePayload } from 'kafkajs';
import { ClassWork } from 'src/model/classwork';
import { ClassworkService } from '@moodle/services/classwork/classwork.service';

@Controller('moodle/classwork')
export class ClassworkController {
    constructor(
        private _classWorkService: ClassworkService
    ) {}

    @Post()
    save(@Body() classWork: ClassWork): void {
        this._classWorkService.save(classWork).then(console.log);
    }

    async handleMessage(message: EachMessagePayload) {
        const msg: Buffer = Buffer.from(message.message.value);
        console.log(`[${new Date().toISOString()}] [${message.topic}] ${msg.toString()}`);
    }
}
