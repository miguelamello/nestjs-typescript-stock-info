import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const hostname = 'localhost'; // stock.io
  const port = 3000;
  await app.listen(port, hostname, () => {
    console.log(`Application is running on: http://${hostname}:${port}`);
  });
}

bootstrap();
