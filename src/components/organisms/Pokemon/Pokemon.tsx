import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import DetailedPokemon from "components/organisms/DetailedPokemon/DetailedPokemon";
import Modal from "components/molecules/Modal/Modal";
import Button from "components/atoms/Button/Button";
import Title from "components/atoms/Title/Tilte";
import Img from "components/atoms/Img/Img";
import { IPokemon, IdetailedPokemon } from "interfaces/interfaces";
import { getSourceImgPokemonFromId } from "helperFn/helperFn";
import { fetchPokemon } from "helperFn/queriesFetch";

const Wrapper = styled.div`
  @keyframes comingFormRight {
    0% {
      opacity: 0%;
    }
    80% {
      opacity: 100%;
    }
  }
  padding: 20px 30px;
  background-color: ${({ theme: { color } }) => color.tertiary};
  border-radius: 30px;
  animation: comingFormRight 500ms;
`;

const Pokemon = ({ name, url }: IPokemon) => {
  const [active, setActive] = useState(false);

  const { data, refetch } = useQuery<IdetailedPokemon>(
    `${name}`,
    () => fetchPokemon(name),
    {
      enabled: false,
    }
  );

  const srcImg = getSourceImgPokemonFromId(url);
  return (
    <>
      <Wrapper>
        <Title heading="h3" fontSize="36px">
          {name}
        </Title>
        <Img width="200px" src={srcImg}></Img>
        <Button
          poke
          onClick={() => {
            setActive(true);
            refetch();
          }}
        >
          Show more...
        </Button>
      </Wrapper>
      <Modal
        active={active}
        closeClick={() => {
          setActive(false);
        }}
      >
        <DetailedPokemon data={data} />
      </Modal>
    </>
  );
};

export default Pokemon;
