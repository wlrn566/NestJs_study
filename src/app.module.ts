import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TestModule } from './test/test.module';
import { AuthModule } from './auth/auth.module';
import { ConfigurationModule } from './config/config.module';

@Module({
  imports: [UserModule, TestModule, AuthModule, ConfigurationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
