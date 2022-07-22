import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
	new ValidationPipe({
		whitelist: true,
		forbidNonWhitelisted: true, // 누군가 이상한거 보내면 req 자체를 막아버림
		transform: true,
	}));
  await app.listen(3000);
}
bootstrap();
