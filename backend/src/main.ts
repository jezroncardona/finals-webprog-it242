import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// We export the handler so Vercel's Node runtime can call it
export default async (req: any, res: any) => {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.init();
  
  // This directs Vercel's internal server to the NestJS instance
  const instance = app.getHttpAdapter().getInstance();
  return instance(req, res);
};