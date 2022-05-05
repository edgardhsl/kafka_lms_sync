import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { ClassWork } from 'src/model/classwork';

@Injectable()
export class ClassworkService {
    
    constructor(
        @Inject('CLASSROOM_SERVICE') private _client: ClientProxy
    ) { }

    async save(classWork: ClassWork) {
        return lastValueFrom(this._client.emit('classroom-classwork', classWork));
    }


}
