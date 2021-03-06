import { Body, Controller, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { EachMessagePayload } from 'kafkajs';
import { Course } from 'src/model/course';
import { CoursesService } from '../../services/courses/courses.service';

@Controller('course')
export class CoursesController {

    constructor(
        private _couseService: CoursesService
    ) {
        _couseService.consume({ topic: 'classroom-courses' }, { eachMessage: this.handleMessage });
    }

    @Post()
    save(@Body() course: Course): void {
        course.id = randomUUID();
        this._couseService.save(course).then(console.log);
    }

    async handleMessage(message: EachMessagePayload) {
        const msg: Buffer = Buffer.from(message.message.value);
        console.log(`[${new Date().toISOString()}] [${message.topic}] ${msg.toString()}`);
    }
}
