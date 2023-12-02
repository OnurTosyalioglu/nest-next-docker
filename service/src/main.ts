import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { config as swaggerConfig } from './config/swagger.config'
import helmet from 'helmet'
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

	app.enableCors()
	app.use(helmet())
	app.use(compression())
	
	const config = new DocumentBuilder()
	  .setTitle(swaggerConfig.title)
    .setDescription(swaggerConfig.description)
    .setVersion(swaggerConfig.version)
    .addTag(swaggerConfig.tag)
    .build();
  
	const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(swaggerConfig.route, app, document);

  await app.listen(process.env.PORT || 3000);
}

bootstrap();
