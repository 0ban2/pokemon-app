import { Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from '../pokemon';

interface Props {
  pokemons:number[];
}

export const FavoritesContainer = ({pokemons}:Props) => {
  return (
    <Grid.Container justify='flex-start' gap={2}>
      {
        pokemons.map(pokemon =>(
          <FavoriteCardPokemon key={pokemon} pokemonId={pokemon} />
        ))
      }
    </Grid.Container>
  )
}
