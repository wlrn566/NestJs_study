import { UserDto } from './user.dto';
import { RolesGuard } from '../guards/roles.guard';
import { UserService } from './user.service';
import { Body, Controller, Get, Post, Query, SetMetadata, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { Roles } from 'src/roles.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @Roles('admin')
  @UseGuards(RolesGuard) // 해당 메서드에만 가드 연결
  @UsePipes(ValidationPipe)
  getHelloUser(
    @Body()user: UserDto
  ): string {
    return this.userService.getHelloUser(user.name);
  }
}
