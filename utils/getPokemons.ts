import { Pokemon } from '../interfaces/pokemon';
import pokeApi from '../api/pokeApi';

export const getPokemons = async (idPokemon:string) => {
  try {
    const {data} = await pokeApi.get<Pokemon>(`/pokemon/${idPokemon}`);
    const {id, name, sprites, abilities} = data;
    return {id, name, sprites, abilities};
  } catch (error) {
    return null;
  }
}
