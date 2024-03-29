import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
config();

const port = process.env.PORT || 2222;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();
