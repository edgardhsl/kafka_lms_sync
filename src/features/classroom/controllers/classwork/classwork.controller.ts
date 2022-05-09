import { Body, Controller, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { ClassWork } from 'src/model/classwork';
import { ClassworkService } from '../../services/classwork/classwork.service';

@Controller('classwork')
export class ClassworkController {
    constructor(
        private _clasWorkService: ClassworkService
    ) { }

    @Post()
    save(@Body() classWork: ClassWork): void {
        classWork.id = randomUUID();
        this._clasWorkService.save(classWork).then(console.log);
    }
}
