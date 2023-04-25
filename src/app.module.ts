import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassroomModule } from './features/classroom/classroom.module';
import { MoodleModule } from './features/moodle/moodle.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ClassroomModule,
    MoodleModule,
    ConfigModule.forRoot({ isGlobal: true })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
