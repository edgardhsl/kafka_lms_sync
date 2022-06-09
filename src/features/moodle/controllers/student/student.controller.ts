import { Body, Controller, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { EachMessagePayload } from 'kafkajs';
import { Student } from 'src/model/student';
import { StudentService } from '../../services/student/student.service';

@Controller('student')
export class StudentController {

    constructor(
        private _studentService: StudentService
    ) {}

    @Post()
    save(@Body() student: Student): void {
        student.id = randomUUID();
        this._studentService.save(student).then(console.log);
    }

    async handleMessage(message: EachMessagePayload) {
        const msg: Buffer = Buffer.from(message.message.value);
        console.log(`[${new Date().toISOString()}] [${message.topic}] ${msg.toString()}`);
    }
}
