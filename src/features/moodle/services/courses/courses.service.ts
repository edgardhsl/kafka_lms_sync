import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { Course } from 'src/model/course';

@Injectable()
export class CoursesService {

    constructor(
        @Inject('MOODLE_SERVICE') private _client: ClientProxy
    ) { }

    async save(course: Course) {
        return lastValueFrom(this._client.emit('moodle-course', course));
    }

}
