import { faker } from '@faker-js/faker';
import { post } from 'request';

const baseUrl = 'http://localhost:3000';

randomSeconds = (min, max) => {
    return (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;
};

generateClassroomData = {
    student: function () {
        post(`${baseUrl}/student`, templateData(faker.name.findName()));
    },
    classWork: function () {
        post(
            `${baseUrl}/classwork`,
            templateData(`Estudo de ${faker.word.findName()}`),
        );
    },
    course: function () {
        post(`${baseUrl}/course`, templateData(faker.name.findName()));
    },
};

function randomInterval(callback, min, max) {
    let timeout;
    const stop = () => clearTimeout(timeout);
    const tick = () => {
        let time = randomSeconds(min, max);
        stop();

        timeout = setTimeout(() => {
            tick();
            callback && typeof callback === 'function' && callback(stop);
        }, time);
    };

    tick();
}

randomInterval(() => {
    generateClassroomData.student();
    generateClassroomData.classWork();
    generateClassroomData.course();
}, 1, 3);

templateData = (name) => {
    return {
        name: '{{$randomFullName}}',
        platform_id: id,
        sync_status: datatype.boolean,
        created_at: new Date().toISOString(),
        sync_at: faker,
    };
};
