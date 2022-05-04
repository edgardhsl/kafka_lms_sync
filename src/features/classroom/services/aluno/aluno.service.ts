import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AlunoService {

    constructor(
        @Inject('CLASSROOM_SERVICE') private _client: ClientProxy
    ) { }

    async save(aluno: any) {
        await this._client.connect().then(_ => console.log('Connected to Classroom Service'));
        return lastValueFrom(this._client.emit('4bz2epm2-aluno', 'dsadsads'));
    }

}
