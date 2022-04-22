import { useState, useEffect } from 'react';

import { MainLayout } from '../../components/layouts'
import { NoFavorites, FavoritesContainer } from '../../components/ui';
import localFavorites from '../../utils/localFavorites';

const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number []>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemonsFavorites);
  }, [])
  return (
    <MainLayout title='Pokémons favoritos'>
      {
        !favoritePokemons.length ? 
        (<NoFavorites />) :
        (<FavoritesContainer pokemons={favoritePokemons} />)
      }
    </MainLayout>
  )
}

export default FavoritesPage