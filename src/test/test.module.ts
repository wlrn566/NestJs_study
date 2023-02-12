import { UserModule } from './../user/user.module';
import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [UserModule, HttpModule],
  controllers: [TestController],
})
export class TestModule {}
