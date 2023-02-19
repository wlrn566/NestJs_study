import { UserDto } from './user.dto';
import { RolesGuard } from '../guards/roles.guard';
import { UserService } from './user.service';
import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  SetMetadata,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Roles } from 'src/roles.decorator';
import { LoggingInterceptor } from '../intercepter/logging.intercepter';
import { ResponseInterceptor } from 'src/intercepter/response.intercepter';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Post()
  // @Roles('admin')
  // @UseGuards(RolesGuard) // 해당 메서드에만 가드 연결
  // @UsePipes(ValidationPipe)
  // getHelloUser(@Body() user: UserDto): string {
  //   const dbUser = this.configService.get<string>('DB_USERNAME');
  //   console.log(dbUser);
  //   console.log(process.env.NODE_ENV);
  //   console.log(`.${process.env.NODE_ENV}.env`);

  //   return this.userService.getHelloUser(user.name);
  // }

  @Post()
  create(@Body() userDto: UserDto): Promise<User> {
    console.log(userDto);
    return this.userService.create(userDto.name, userDto.age);
  }

  @Get()
  // @UseInterceptors(LoggingInterceptor)
  @UseInterceptors(ResponseInterceptor)
  getHelloUser(): string {
    console.log('UserController getHelloUser()');
    return this.userService.getHelloUser('nestjs');
  }
}
