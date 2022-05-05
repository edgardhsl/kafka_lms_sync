import { Body, Controller, Post } from '@nestjs/common';
import { Course } from 'src/model/course';
import { CoursesService } from '../../services/courses/courses.service';

@Controller('course')
export class CoursesController {

    constructor(
        private _couseService: CoursesService
    ) { }

    @Post()
    save(@Body() course: Course): void {
        this._couseService.save(course).then(console.log);
    }
}
