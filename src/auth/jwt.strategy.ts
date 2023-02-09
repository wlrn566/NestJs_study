import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // jwt 추출방법 : Authorization 헤더의 Bearer 토큰
      ignoreExpiration: false, //true : Passport에 토큰 검증을 위임하지 않고 직접 검증, false : Passport에 검증 위임
      secretOrKey: 'secret key', // 토큰 대칭 비밀키
    });
  }

  async validate(payload: any) {
    console.log('JwtStrategy validate()');
    return { userId: payload.sub, username: payload.username };
  }
}
