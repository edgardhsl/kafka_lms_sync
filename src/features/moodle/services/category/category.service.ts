import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { Category } from 'src/model/category';

@Injectable()
export class CategoryService {

    constructor(
        @Inject('MOODLE_SERVICE') private _client: ClientProxy
    ) { }

    async save(category: Category) {
        return lastValueFrom(this._client.emit('moodle-category', category));
    }

}
