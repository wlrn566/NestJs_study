import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { UserService } from 'src/user/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(
    @Req() req
  ) {
    console.log('AppController login');
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('user-info')
    getUserInfo(
    @Req() req
  ) {
    return this.userService.findOne(req.user['username']);
  }
}
