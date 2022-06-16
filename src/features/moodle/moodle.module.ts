import { Module } from '@nestjs/common';
import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices';
import { ClassworkController } from './controllers/classwork/classwork.controller';
import { CoursesController } from './controllers/course/course.controller';
import { StudentController } from './controllers/student/student.controller';
import { ClassworkService } from './services/classwork/classwork.service';
import { CoursesService } from './services/courses/courses.service';
import { StudentService } from './services/student/student.service';

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
        StudentService,
        CoursesService,
        ClassworkService
    ],
    controllers: [StudentController, ClassworkController, CoursesController]
})
export class MoodleModule { }
