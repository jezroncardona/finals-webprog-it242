import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; // Make sure this path is correct!

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.init();
  return app.getHttpAdapter().getInstance();
}

export default bootstrap();