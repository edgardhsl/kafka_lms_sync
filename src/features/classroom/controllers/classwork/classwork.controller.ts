import { Body, Controller, Post } from '@nestjs/common';
import { ClassWork } from 'src/model/classwork';
import { CoursesService } from '../../services/courses/courses.service';

@Controller('classwork')
export class ClassworkController {
    constructor(
        private _clasWorkService: CoursesService
    ) { }

    @Post()
    save(@Body() classWork: ClassWork): void {
        this._clasWorkService.save(classWork).then(console.log);
    }
}
