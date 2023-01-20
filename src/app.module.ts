import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './logger.middleware';
import { PokedexModule } from './pokedex/pokedex.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [PokedexModule, TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('todo');
  }
}

/*

- Route 를 특정하여 사용할 때,
 .forRoutes({ path: 'todo', method: RequestMethod.GET });

- 패턴 기반의 라우팅 지원
 .forRoutes({ path: 'ab&cd', method: RequestMethod.ALL })

*/
