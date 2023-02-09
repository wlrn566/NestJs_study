import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class MiddlewareTest implements NestMiddleware{
  use(req: any, res: any, next: (error?: any) => void) {
    console.log("middleware");
    // console.log(req.headers);
    next();
  }
}

// export function MiddlewareTest(req: Request, res: Response, next: NextFunction) {
//   console.log("middleware function");
//   next();
// }
