import { Injectable } from '@nestjs/common';
import { Todo } from 'src/interfaces/todo.interface';

/*---------------------------------------------*
    PROVIDERS
    - provider : services, repositories, factories, helpers... etc..
    - provider 는 종속성에 의해 Inject 가능
    - provider 객체의 생성 및 연결은 nest runtime system에 위임될 수 있음
    - controller 는 HTTP 요청을 처리하고 복잡한 작업은 provider에 위임
    - provider : module 에서 선언하는 일반 javascript class
  *---------------------------------------------*/

// nest g service todo
@Injectable() // decorator : TodoService class가 Neset IoC container에서 관리하는 classㅇ임을 선언
export class TodoService {
  private readonly todos: Todo[];

  create(todo: Todo) {
    this.todos.push(todo);
  }

  findAll(): Todo[] {
    return this.todos;
  }
}
