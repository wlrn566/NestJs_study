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
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Roles } from 'src/roles.decorator';
import { ConfigService } from '@nestjs/config';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  @Post()
  @Roles('admin')
  @UseGuards(RolesGuard) // 해당 메서드에만 가드 연결
  @UsePipes(ValidationPipe)
  getHelloUser(@Body() user: UserDto): string {
    const dbUser = this.configService.get<string>('DB_USERNAME');
    console.log(dbUser);
    console.log(process.env.NODE_ENV);
    console.log(`.${process.env.NODE_ENV}.env`);

    return this.userService.getHelloUser(user.name);
  }
}
