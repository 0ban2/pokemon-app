import { GetStaticProps, GetStaticPaths } from 'next';

import { MainLayout, PokemonLayout } from '../../components/layouts';
import { Pokemon } from '../../interfaces/pokemon';
import {getPokemons} from '../../utils/getPokemons';

interface Props {
  pokemon: Pokemon;
}

const PokemonPage = ({pokemon}:Props) => {
  return (
    <MainLayout title={pokemon.name}>
      <PokemonLayout pokemon={pokemon} />
    </MainLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  // const { data } = await  // your fetch function here 
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);
  return {
    paths: pokemons151.map(id => ({
      params: {
        id,
      }
    })),
    fallback: 'blocking',
  }
}


export const getStaticProps: GetStaticProps = async ({params}) => {
  const {id} = params as {id: string};
  const pokemon = await getPokemons(id);
  console.log(pokemon);
  
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

export default PokemonPage;