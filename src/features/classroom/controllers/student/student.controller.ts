import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { Student } from 'src/model/student';
import { StudentService } from '../../services/student/student.service';

@Controller('student')
export class StudentController {

    constructor(
        private _studentService: StudentService
    ) { }

    @Post()
    save(@Body(new ValidationPipe({transform: false})) student: Student): void {
        this._studentService.save(student).then(console.log);
    }
}
