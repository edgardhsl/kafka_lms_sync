import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = process.env.PORT || 2000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);

  console.log(`NAME IS: ${process.env.NAME}`);
}//
bootstrap();
