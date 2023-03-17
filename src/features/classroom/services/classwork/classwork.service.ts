import { Inject, Injectable, OnApplicationShutdown } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Consumer, ConsumerRunConfig, ConsumerSubscribeTopic, Kafka } from 'kafkajs';
import { lastValueFrom } from 'rxjs';
import { ClassWork } from 'src/model/classwork';

@Injectable()
export class ClassworkService implements OnApplicationShutdown {
    
    private readonly kafka = new Kafka({
        brokers: ['localhost:9092']
    });

    private readonly consumers: Consumer[] = []

    constructor(
        @Inject('CLASSROOM_SERVICE') private _client: ClientProxy
    ) { }

    async save(classWork: ClassWork) {
        return lastValueFrom(this._client.emit('classroom-classwork', classWork));
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
