import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MOODLE_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'MoodleService',
            brokers: ['moped-01.srvs.cloudkafka.com:9094'],
          },
          consumer: {
            groupId: 'moodle-producer',
          },
        },
      },
    ]),
  ],
})
export class MoodleModule {}
