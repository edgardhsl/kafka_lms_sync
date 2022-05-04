import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AlunoController } from './controllers/aluno/aluno.controller';
import { AtividadeController } from './controllers/atividade/atividade.controller';
import { AlunoService } from './services/aluno/aluno.service';
import { AtividadeService } from './services/atividades/atividade.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CLASSROOM_SERVICE',
        //transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'ClassRoomService',
            brokers: [
                'moped-01.srvs.cloudkafka.com:9094',
                'moped-02.srvs.cloudkafka.com:9094',
                'moped-03.srvs.cloudkafka.com:9094'
            ],
            ssl: true,
            sasl: {
                username: '4bz2epm2',
                password: 'ax5ciHDiCG7ihlTyCGOcHmi396Mz6AmR'
            }
          },
          consumer: {
            groupId: 'classroom-producer',
          },
        },
      },
    ]),
  ],
  providers: [AlunoService, AtividadeService],
  controllers: [AlunoController, AtividadeController],
})
export class ClassroomModule {}
