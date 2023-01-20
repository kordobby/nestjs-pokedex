export class CreatePokemonDto {
  id: number;
  name: string;
  stat: number;
}

export class CreateTodoDto {
  id: number;
  title: string;
  contents: string;
  done: boolean;
}

export class ListAllTodos {
  limit: number;
}

export class UpdateTodoDto {
  id: number;
  title: string;
  contents: string;
  done: boolean;
}
