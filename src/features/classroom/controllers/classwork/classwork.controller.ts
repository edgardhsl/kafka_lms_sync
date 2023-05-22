import { Body, Controller, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { EachMessagePayload } from 'kafkajs';
import { ClassWork } from 'src/model/classwork';
import { ClassworkService } from '../../services/classwork/classwork.service';

@Controller('classroom/classwork')
export class ClassworkController {
    constructor(
        private _classWorkService: ClassworkService
    ) {}

    @Post()
    save(@Body() classWork: ClassWork): void {
        this._classWorkService.save(classWork).then(console.log);
    }
}
