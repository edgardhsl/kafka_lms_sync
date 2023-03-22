import { Body, Controller, Post } from '@nestjs/common';
import { EachMessagePayload } from 'kafkajs';
import { Student } from 'src/model/student';
import { StudentService } from '../../services/student/student.service';

@Controller('moodle/student')
export class StudentController {

    constructor(
        private _studentService: StudentService
    ) {}

    @Post()
    save(@Body() student: Student): void {
        this._studentService.save(student).then(console.log);
    }

    async handleMessage(message: EachMessagePayload) {
        const msg: Buffer = Buffer.from(message.message.value);
        console.log(`[${new Date().toISOString()}] [${message.topic}] ${msg.toString()}`);
    }
}
