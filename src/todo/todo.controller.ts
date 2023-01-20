import { TodoService } from './todo.service';
import { UpdateTodoDto } from './../dto/dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateTodoDto, ListAllTodos } from 'src/dto/dto';
import { Todo } from 'src/interfaces/todo.interface';

/*---------------------------------------------*
    BASIC API STRUCTURE :: EXAMPLE
    - findAll : 전체 데이터 목록 조회
    - findOne : 데이터 상세 조회
    - create : 데이터 생성
    - update : 데이터 수정
    - remove : 데이터 삭제
  *---------------------------------------------*/

@Controller('todo')
export class TodoController {
  // TodoService 는 constructor 를 통해 주입됨
  // private을 사용하면 선언과 초기화가 동시에 이루어짐
  constructor(private todoService: TodoService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    // return 'This action adds Todo List';
    this.todoService.create(createTodoDto);
  }

  @Get()
  findAll(@Query() query: ListAllTodos) {
    return `This action returns all todos (limit: ${query.limit} items`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return `This action updates updates a #${id} todo`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} todo`;
  }
}
