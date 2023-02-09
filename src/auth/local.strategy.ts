import { AuthService } from './auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    console.log('LocalStrategy');
    const user = await this.authService.validateUser(username, password);
    console.log('LocalStrategy authService.validateUser() return');
    console.log(user);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
