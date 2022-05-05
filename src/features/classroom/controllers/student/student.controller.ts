import { Body, Controller, Post } from '@nestjs/common';
import { Student } from 'src/model/student';
import { StudentService } from '../../services/student/student.service';

@Controller('student')
export class StudentController {

    constructor(
        private _studentService: StudentService
    ) { }

    @Post()
    save(@Body() student: Student): void {
        this._studentService.save(student).then(console.log);
    }
}
