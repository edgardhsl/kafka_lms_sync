import { Inject, Injectable, OnApplicationShutdown } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Consumer, ConsumerRunConfig, ConsumerSubscribeTopic, Kafka } from 'kafkajs';
import { lastValueFrom } from 'rxjs';
import { Course } from 'src/model/course';

@Injectable()
export class CoursesService implements OnApplicationShutdown {

    private readonly kafka = new Kafka({
        brokers: ['35.224.210.161:9092']
    });

    private readonly consumers: Consumer[] = []

    constructor(
        @Inject('MOODLE_SERVICE') private _client: ClientProxy
    ) { }

    async save(course: Course) {
        return lastValueFrom(this._client.emit('moodle-course', course));
    }

    async consume(topic: ConsumerSubscribeTopic, config: ConsumerRunConfig ) {
        const consumer = this.kafka.consumer({groupId: 'nestjs-kafka' });
        await consumer.connect();
        await consumer.subscribe(topic);
        await consumer.run(config);
        this.consumers.push(consumer);
    }

    async onApplicationShutdown(signal?: string) {
        for(const consumer of this.consumers) {
            consumer.disconnect();
        }
    }

}
