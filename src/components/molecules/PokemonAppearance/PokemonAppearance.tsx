import styled from "styled-components";
import Img from "components/atoms/Img/Img";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0px auto 30px;
  @media (min-width: ${({ theme }) => theme.screenSize.tablet}) {
    width: 740px;
  }
  @media (min-width: ${({ theme }) => theme.screenSize.desktop}) {
    width: 1000px;
  }
`;
const PokemonAppearance = ({
  sprites
}: {
  sprites: {
    front_default: string;
    back_default: string;
  };
}) => {
  return (
    <Wrapper>
      <Img src={sprites?.front_default} />
      <Img src={sprites?.back_default} />
    </Wrapper>
  );
};

export default PokemonAppearance;
