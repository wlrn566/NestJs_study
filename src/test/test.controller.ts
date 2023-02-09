import { Controller, Get } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Controller('test')
export class TestController {
  constructor(private readonly userService: UserService) {}

  @Get()
  test() {
    return this.userService.getHelloUser("abc");
  }
}
