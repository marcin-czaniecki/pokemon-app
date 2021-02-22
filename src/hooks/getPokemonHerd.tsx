import { useQuery } from "react-query";
import { fetchPokemons } from "helperFn/queriesFetch";

let offset = 0;
const GetPokemonHerd = (limit: number) => {
  const { isLoading, data, refetch } = useQuery("pokemons", () =>
    fetchPokemons(limit, offset)
  );
  const prevFn = () => {
    offset -= offset > 0 ? limit : 0;
    refetch();
  };
  const nextFn = () => {
    offset += limit;
    refetch();
  };

  return { prevFn, nextFn, query: { isLoading, data, refetch } };
};
export default GetPokemonHerd;
