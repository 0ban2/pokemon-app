import { Grid } from '@nextui-org/react';
import { NextPage, GetStaticProps } from 'next';
import { pokeApi } from '../api';
import { MainLayout } from '../components/layouts';
import { PokemonCard } from '../components/pokemon';
import { PokemonListResponse, SmallPokemon } from '../interfaces';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({pokemons}) => {  
  return (
    <MainLayout title='Listado de Pokémons'>
      <Grid.Container gap={2} justify="flex-start">
        {
          pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        }
      </Grid.Container>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  const pokemons: SmallPokemon[] = data.results.map((pokemon, id) => ({
    ...pokemon,
    id: id + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id + 1}.svg`
  }));
  return {
    props: {
      pokemons,
    }
  }
}

export default HomePage
