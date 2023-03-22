import { Body, Controller, Post } from '@nestjs/common';
import { Course } from 'src/model/course';
import { CoursesService } from '@classroom/services/courses/courses.service';

@Controller('classroom/course')
export class CoursesController {

    constructor(
        private _courseService: CoursesService
    ) {}

    @Post()
    save(@Body() course: Course): void {
        this._courseService.save(course).then(console.log);
    }
}
