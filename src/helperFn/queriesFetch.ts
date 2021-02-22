export const fetchPokemon = async (name: string): Promise<any> => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`.toLocaleLowerCase()
  );
  return await res.json();
};
export const fetchPokemons = async (
  limit: number,
  offset: number
): Promise<any> => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  return await res.json();
};
