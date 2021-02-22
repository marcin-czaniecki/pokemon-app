import React from "react";
import styled from "styled-components";
import ItemInfoTable from "components/atoms/ItemInfoTable/ItemInfoTable";
import InfoTable from "components/molecules/InfoTable/InfoTable";
import { IdetailedPokemon } from "interfaces/interfaces";

const Wrapper = styled.section`
  display: grid;
  margin: 0 auto;
  gap: 10px;
  justify-content: center;
  @media (min-width: ${({ theme }) => theme.screenSize.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    width: 740px;
  }
  @media (min-width: ${({ theme }) => theme.screenSize.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    width: 1000px;
  }
`;

const PokemonInfo = ({ data }: { data: IdetailedPokemon }) => {
  const { types, abilities, stats } = data;
  return (
    <Wrapper>
      <InfoTable title="Types">
        {types.map(({ slot, type: { name } }) => {
          return (
            <React.Fragment key={name}>
              <ItemInfoTable name="Name:">{name}</ItemInfoTable>
              <ItemInfoTable name="Slot:">{slot}</ItemInfoTable>
              <tr>
                <td>
                  <span />
                </td>
              </tr>
            </React.Fragment>
          );
        })}
      </InfoTable>
      <InfoTable title="Abilities">
        {abilities.map(({ slot, is_hidden, ability: { name } }) => {
          return (
            <React.Fragment key={name}>
              <ItemInfoTable name="Name:">{name}</ItemInfoTable>
              <ItemInfoTable name="Slot:">{slot}</ItemInfoTable>
              <ItemInfoTable name="Hidden:">
                {is_hidden.toString()}
              </ItemInfoTable>
              <tr>
                <td>
                  <span />
                </td>
              </tr>
            </React.Fragment>
          );
        })}
      </InfoTable>
      <InfoTable title="Stats">
        {stats.map(({ base_stat, stat: { name } }) => {
          return (
            <React.Fragment key={name + base_stat}>
              <ItemInfoTable name={name}>{base_stat}</ItemInfoTable>
              <tr>
                <td>
                  <span />
                </td>
              </tr>
            </React.Fragment>
          );
        })}
      </InfoTable>
    </Wrapper>
  );
};

export default PokemonInfo;
