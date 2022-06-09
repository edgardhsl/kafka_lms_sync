import { Module } from '@nestjs/common';
import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'MOODLE_SERVICE',
                transport: Transport.KAFKA,
                options: {
                    client: {
                        clientId: 'MoodleService',
                        brokers: [
                            '35.224.210.161:9092',
                        ]
                    },
                    consumer: {
                        groupId: 'moodle-producer',
                    },
                },
            },
        ]),
    ],
    providers: [
        {
            provide: 'KAFKA_PRODUCER',
            useFactory: async (kafkaService: ClientKafka) => {
                return kafkaService.connect();
            },
            inject: ['MOODLE_SERVICE']
        },
    ],
})
export class MoodleModule { }
