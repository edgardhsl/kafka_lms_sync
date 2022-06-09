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
                            '35.224.210.161:9092',
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
        StudentService,
        {
            provide: 'KAFKA_PRODUCER',
            useFactory: async (kafkaService: ClientKafka) => {
                return kafkaService.connect();
            },
            inject: ['CLASSROOM_SERVICE']
        },
        CoursesService,
        ClassworkService
    ],
    controllers: [StudentController, ClassworkController, CoursesController],
})
export class ClassroomModule { }
