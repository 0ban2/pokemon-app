const toggleFavorite = (id: number) => {
  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
  if(favorites.includes(id)) {
    favorites = favorites.filter(pokeFavorite => pokeFavorite !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const isInFavorite = (id:number): boolean => {
  if(typeof window === 'undefined'){
    return false
  };
  const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
  return favorites.includes(id);
};

const pokemonsFavorites = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
};

export default {
  isInFavorite,
  toggleFavorite,
  pokemonsFavorites,
};
