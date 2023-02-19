import { UserService } from 'src/user/user.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    // console.log('AuthService validateUser()');
    // const user = await this.userService.findOne(username);

    // if (user && user.password === pass) {
    //   const { password, ...result } = user;
    //   const accessToken = await this.jwtService.sign(result); // 토큰 발생

    //   result['token'] = accessToken; // 토큰 추가

    //   return result;
    // }
    return null;
  }

  // async login(user: any) {
  //   const payload = { username: user.username, sub: user.userId };
  //   return {
  //     // jwt 발행
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }
}
