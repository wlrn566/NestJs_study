import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(MiddlewareTest);
  // app.useGlobalGuards(new AuthGuard); 앱 전체에 가드 연결 -> 모듈에서 종속성을 주입할 수 없음 -> app.module.ts에 종속성 주입
  await app.listen(3000);
}
bootstrap();