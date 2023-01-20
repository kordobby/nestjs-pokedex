import { Injectable } from '@nestjs/common';
import { Pokedex } from 'src/interfaces/pokedex.interface';
@Injectable()
export class PokedexService {
  private readonly pokedex: Pokedex[] = [];

  create(pokedex: Pokedex) {
    this.pokedex.push(pokedex);
  }

  findAll(): Pokedex[] {
    return this.pokedex;
  }
}
