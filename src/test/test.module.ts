import { UserModule } from './../user/user.module';
import { Module } from '@nestjs/common';
import { TestController } from './test.controller';

@Module({
  imports: [UserModule],
  controllers: [TestController],
})
export class TestModule {}
