import { Body, Controller, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { EachMessagePayload } from 'kafkajs';
import { ClassWork } from 'src/model/classwork';
import { ClassworkService } from '../../services/classwork/classwork.service';

@Controller('/classroom/classwork')
export class ClassworkController {
    constructor(
        private _classWorkService: ClassworkService
    ) { 
        console.log("Iniciando ClassworkController");
        _classWorkService.consume({ topic: 'classroom-classwork' }, { eachMessage: this.handleMessage });
    }

    @Post()
    save(@Body() classWork: ClassWork): void {
        this._classWorkService.save(classWork).then(console.log);
    }

    async handleMessage(message: EachMessagePayload) {
        const msg: Buffer = Buffer.from(message.message.value);
        console.log(`[${new Date().toISOString()}] [${message.topic}] ${msg.toString()}`);
    }
}
