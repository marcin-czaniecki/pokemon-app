import React from "react";
import styled from "styled-components";
import Pokemon from "components/organisms/Pokemon/Pokemon";
import { IListPokemon } from "interfaces/interfaces";

const Wrapper = styled.div`
  display: grid;
  width: 300px;
  margin: 0 auto;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
  @media screen and (min-width: ${({ theme: { screenSize } }) =>
      screenSize.tablet}) {
    width: 740px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: ${({ theme: { screenSize } }) =>
      screenSize.desktop}) {
    width: 1000px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ListPokemon = ({ pokemons, setPokedexState }: IListPokemon) => {
  return (
    <Wrapper>
      {pokemons.map((item) => {
        return <Pokemon key={item.name} {...item} />;
      })}
    </Wrapper>
  );
};

export default ListPokemon;
