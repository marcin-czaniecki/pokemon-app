import React from "react";
import styled from "styled-components";
import Footer from "components/organisms/Footer/Footer";
import SearchBar from "components/organisms/SearchBar/SearchBar";
import ListPokemon from "components/organisms/ListPokemon/ListPokemon";
import TopBar from "components/molecules/TopBar/TopBar";
import Title from "components/atoms/Title/Tilte";
import getPokemonHerd from "hooks/getPokemonHerd";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  padding-top: 10px;
  flex-direction: column;
  text-align: center;
  overflow: auto;
`;

const MainView = () => {
  const {
    prevFn,
    nextFn,
    query: { isLoading, data }
  } = getPokemonHerd(12);

  return (
    <>
      <Wrapper>
        <Title fontSize="36px" poke>
          pokemon app
        </Title>
        <SearchBar />
        <TopBar prev={prevFn} next={nextFn} />
        {isLoading ? "loading..." : <ListPokemon pokemons={data.results} />}
        <Footer />
      </Wrapper>
    </>
  );
};

export default MainView;
