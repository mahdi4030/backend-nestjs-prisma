import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {abortOnError: false});

  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: 'http://localhost:5000',
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true, // remove non-whitelisted properties
  }));

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
