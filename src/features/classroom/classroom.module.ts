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
                name: 'CLASSROOM_SERVICE',
                transport: Transport.KAFKA,
                options: {
                    client: {
                        clientId: 'ClassroomService',
                        brokers: [
                            '127.0.0.1:9092',
                        ]
                    },
                    consumer: {
                        groupId: 'classroom-producer',
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
            inject: ['CLASSROOM_SERVICE']
        },
        StudentService,
        CoursesService,
        ClassworkService
    ],
    controllers: [StudentController, ClassworkController, CoursesController],
})
export class ClassroomModule { }
