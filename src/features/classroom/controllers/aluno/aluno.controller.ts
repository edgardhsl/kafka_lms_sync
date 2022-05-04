import { Body, Controller, Post } from '@nestjs/common';
import { AlunoService } from '../../services/aluno/aluno.service';

@Controller('aluno')
export class AlunoController {

    constructor(
        private _alunoService: AlunoService
    ) { }

    @Post()
    save(@Body() aluno: any): void {
        console.log(aluno);
        this._alunoService.save(aluno).then(console.log);
    }
}
