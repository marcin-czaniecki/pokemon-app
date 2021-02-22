import React from "react";
import PokemonInfo from "components/organisms/PokemonInfo/PokemonInfo";
import PokemonAppearance from "components/molecules/PokemonAppearance/PokemonAppearance";
import Title from "components/atoms/Title/Tilte";
import { IdetailedPokemon } from "interfaces/interfaces";

const DetailedPokemon = ({ data }: { data?: IdetailedPokemon }) => {
  if (data && !data?.count) {
    const { id, name, sprites } = data;
    return (
      <article>
        <header>
          <div>
            <Title>{name}</Title>
            <Title heading="p">{`id: ${id}`}</Title>
          </div>
          <PokemonAppearance sprites={sprites} />
        </header>
        <PokemonInfo data={data} />
      </article>
    );
  } else {
    return <p>We are looking for this Pokemon!</p>;
  }
};

export default DetailedPokemon;
