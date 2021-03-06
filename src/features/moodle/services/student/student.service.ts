import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { Student } from 'src/model/student';

@Injectable()
export class StudentService {

    constructor(
        @Inject('MOODLE_SERVICE') private _client: ClientProxy
    ) { }

    async save(student: Student) {
        return lastValueFrom(this._client.emit('moodle-student', student));
    }

}
