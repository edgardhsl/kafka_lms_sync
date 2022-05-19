import { Body, Controller, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Student } from 'src/model/student';
import { StudentService } from '../../services/student/student.service';

@Controller('student')
export class StudentController {

    constructor(
        private _studentService: StudentService
    ) { }

    @Post()
    save(@Body() student: Student): void {
        student.id = randomUUID();
        this._studentService.save(student).then(console.log);
    }
}
