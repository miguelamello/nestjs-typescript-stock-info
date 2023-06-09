import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const hostname = 'localhost'; // stock-service.io
  const port
  await app.listen(3000, hostname, () => {
    console.log(`Application is running on: http://${hostname}:3000`);
  });
}

bootstrap();
