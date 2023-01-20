import {
  Injectable,
  NestModule,
  MiddlewareConsumer,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

/*---------------------------------------------*
    Nest의 미들웨어 사용법
    - @Injectable 데코레이터 사용
    - NestMiddleware interface 를 implements 해서 사용
    - Module 의 Class 내부에 configure 를 사용해 선언
    - 이 때, NestModule interface 를 implements
  *---------------------------------------------*/

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}
