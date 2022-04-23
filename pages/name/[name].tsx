import { GetStaticProps, GetStaticPaths } from 'next';

import { MainLayout, PokemonLayout } from '../../components/layouts';
import pokeApi from '../../api/pokeApi';
import { Pokemon } from '../../interfaces/pokemon';
import { PokemonListResponse } from '../../interfaces/pokemon-list';
import {getPokemons} from '../../utils/getPokemons';

interface Props {
  pokemon: Pokemon;
}

const PokemonByNamePage = ({pokemon}:Props) => {
  return (
    <MainLayout title={`Pokémon - ${pokemon.name}`}>
      <PokemonLayout pokemon={pokemon} />
    </MainLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const {data: {results}} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  const pokemonNames: string[] = results.map(({name}) => name);
  
  return {
    paths: pokemonNames.map(name => ({
      params: {name}
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const {name} = params as {name: string};
  const pokemon = await getPokemons(name);

  if(!pokemon) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {
      pokemon,
    }
  }
}

export default PokemonByNamePage;