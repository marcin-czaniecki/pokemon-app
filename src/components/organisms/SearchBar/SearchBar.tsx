import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import Button from "components/atoms/Button/Button";
import Input from "components/atoms/Input/Input";
import Toggle from "components/atoms/Toggle/Toggle";
import { delateIcon, searchIcon } from "assets/icons/icons";
import { IdetailedPokemon } from "interfaces/interfaces";
import DetailedPokemon from "components/organisms/DetailedPokemon/DetailedPokemon";
import { fetchPokemon } from "helperFn/queriesFetch";

const Wrapper = styled.div<{ active: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  height: 100%;
  width: 100%;
  margin-bottom: 20px;
  background-color: ${({ theme: { color } }) => color.tertiary};
  flex-direction: column;
  transform: translateX(${({ active }) => (active ? "0%" : "100%")});
  transition: 1s;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 3;
  border-left: solid 2px ${({ theme: { color } }) => color.primary};
  form {
    display: flex;
    margin: 10px auto 20px;
  }
  ol {
    margin: 0 auto;
    width: 300px;
    text-align: left;
  }
`;

const SearchBar = () => {
  const [active, setActive] = useState(false);
  const [name, setName] = useState("bulbasaur");

  const { isLoading, error, data, refetch } = useQuery<IdetailedPokemon>(
    "pokemon",
    () => fetchPokemon(name)
  );
  const toggle = () => {
    setActive(!active);
  };

  return (
    <>
      <Wrapper active={active}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Input
            id="search"
            onKeyUp={(e) => {
              const value = e.currentTarget.value;
              setName(value.toLowerCase());
            }}
            placeholder="Find your pokemons"
            autoComplete="off"
          />
          <Button
            onClick={() => {
              refetch();
            }}
          >
            search
          </Button>
        </form>
        <div>
          {isLoading && <p>We are looking for this Pokemon!</p>}
          {error ? (
            <>
              <div>We can't find this pokemon: / </div>
            </>
          ) : (
            <DetailedPokemon data={data} />
          )}
        </div>
      </Wrapper>
      <Toggle
        active={active}
        onClick={toggle}
        activeIcon={delateIcon}
        deactivateIcon={searchIcon}
      />
    </>
  );
};

export default SearchBar;
