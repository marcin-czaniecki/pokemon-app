import styled, { css } from "styled-components";
import { IToggle } from "interfaces/interfaces";
import { iconHandler } from "helperFn/helperFn";

const Toggle = styled.button<IToggle>`
  position: fixed;
  bottom: 20px;
  right: 30px;
  height: 60px;
  width: 60px;
  background-color: ${({ theme: { color } }) => color.background};
  border-radius: 50%;
  border: 2px solid ${({ theme: { color } }) => color.primary};
  z-index: 3;
  outline: none;
  ::after {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 100%;
    width: 100%;
    mask-image: url(${iconHandler});
    mask-position: 45% 45%;
    mask-size: 70%;
    mask-repeat: no-repeat;
    background-color: ${({ theme: { color } }) => color.primary};
    transition: 200ms;
  }
  ${({ close }) =>
    close &&
    css`
      position: absolute;
      top: 10px;
      right: 10px;
    `}
`;

export default Toggle;
