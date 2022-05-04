import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassroomModule } from './features/classroom/classroom.module';
import { MoodleModule } from './features/moodle/moodle.module';

@Module({
  imports: [
    ClassroomModule,
    MoodleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
