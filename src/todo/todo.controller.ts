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

@Controller('todo')
export class TodoController {
  /*---------------------------------------------*
    BASIC API STRUCTURE :: EXAMPLE
    - findAll : 전체 데이터 목록 조회
    - findOne : 데이터 상세 조회
    - create : 데이터 생성
    - update : 데이터 수정
    - remove : 데이터 삭제
  *---------------------------------------------*/

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return 'This action adds Todo List';
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
