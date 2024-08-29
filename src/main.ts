import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Tasks')
  .setDescription('The tanks API description')
  .setVersion('1.0')
  .addTag('Taks')
  
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe({whitelist: true}));
  app.enableCors()
  await app.listen(3000);
}
bootstrap();
