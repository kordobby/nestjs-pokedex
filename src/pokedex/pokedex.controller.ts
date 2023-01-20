import { ListAllTodos, UpdateTodoDto } from './../dto/dto';
import { PokedexService } from './pokedex.service';
import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import { Pokedex } from 'src/interfaces/pokedex.interface';
import { Get } from '@nestjs/common';
import { CreatePokemonDto, CreateTodoDto } from 'src/dto/dto';

@Controller('pokedex') // make end-point :: ${BASE_URL}/pokedex
export class PokedexController {
  constructor(private pokedexService: PokedexService) {}

  /* Request Object */
  @Get('pokemon') // make end-point :: ${BASE_URL}/pokedex/pokemon
  async findAll(@Req() request: Request): Promise<Pokedex[]> {
    console.log(request);
    // method & type
    return this.pokedexService.findAll();
  }

  /* @Param() decorator */
  @Get(':id') // make end-point :: ${BASE_URL}/pokedex/1
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #@{params.id} cat`;
  }

  /* Asyncrous : must returun Promise Object */
  @Get()
  async findAllPokemon(): Promise<any[]> {
    return [];
  }

  /* Body DTO of Post */
  @Post()
  async create(@Body() createPokemonDto: CreatePokemonDto) {
    return 'This action adds a new cat';
  }
}
