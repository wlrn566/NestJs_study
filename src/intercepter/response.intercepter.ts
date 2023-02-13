import { BadGatewayException, CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, catchError, throwError } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    return next.handle().pipe(
      tap(() => console.log('After...')),
      map((res) => ({ res })), // 컨트롤러 응답값
      catchError((err) => throwError(() => new BadGatewayException())), // 예외 처리
    );
  }
}
