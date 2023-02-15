import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(MiddlewareTest);
  // app.useGlobalGuards(new AuthGuard); 앱 전체에 가드 연결 -> 모듈에서 종속성을 주입할 수 없음 -> app.module.ts에 종속성 주입
  // app.useGlobalInterceptors(new LoggingInterceptor());
  // const configService = app.get(ConfigService);
  // const host = configService.get<string>('DB_HOST');
  // console.log(host);
  await app.listen(3000);
}
bootstrap();
