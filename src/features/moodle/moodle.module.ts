import { Module } from '@nestjs/common';
import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices';
import { CategoryController } from './controllers/category/category.controller';
import { ClassworkController } from './controllers/classwork/classwork.controller';
import { CoursesController } from './controllers/course/course.controller';
import { StudentController } from './controllers/student/student.controller';
import { CategoryService } from './services/category/category.service';
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
                            `${process.env.DOCKER_KAFKA_HOST}:9092`,
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
        ClassworkService,
        CategoryService
    ],
    controllers: [StudentController, ClassworkController, CoursesController, CategoryController]
})
export class MoodleModule { }
