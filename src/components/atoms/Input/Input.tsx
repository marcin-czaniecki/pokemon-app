import styled from "styled-components";

const Input = styled.input`
  height: 50px;
  width: 190px;
  padding: 0px 10px;
  background-color: ${({ theme: { color } }) => color.background};
  color: ${({ theme: { color } }) => color.primary};
  font-weight: 900;
  font-family: ${({ theme: { fontFamily } }) => fontFamily.primary};
  text-transform: uppercase;
  border: 2px solid ${({ theme: { color } }) => color.primary};
  outline: none;
  @media screen and (min-width: ${({ theme: { screenSize } }) =>
      screenSize.tablet}) {
    width: 300px;
  }
  @media screen and (min-width: ${({ theme: { screenSize } }) =>
      screenSize.desktop}) {
    width: 400px;
  }
`;

export default Input;
