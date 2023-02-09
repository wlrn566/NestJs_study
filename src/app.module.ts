import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TestModule } from './test/test.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, TestModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
  // providers: [
  //   {
  //     provide: APP_GUARD,
  //     useClass: JwtAuthGuard,
  //   },
  //   AppService,
  // ] // main.ts 에서 전역으로 가드를 설정하지 않고 모듈에 설정해서 종속성 주입
})
export class AppModule {}
