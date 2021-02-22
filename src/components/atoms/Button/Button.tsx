import styled, { css } from "styled-components";

const Button = styled.button<{ poke?: boolean; secondary?: boolean }>`
  height: 50px;
  min-width: 100px;
  padding: 0 10px;
  background-color: ${({ theme: { color } }) => color.background};
  color: ${({ theme: { color } }) => color.primary};
  font-weight: 900;
  font-family: ${({ theme: { fontFamily } }) => fontFamily.secondary};
  text-transform: uppercase;
  border: 2px solid ${({ theme: { color } }) => color.primary};
  outline: none;
  :hover {
    background-color: #ffde00;
    color: #263238;
    border: 2px solid #263238;
  }
  ${({ poke }) =>
    poke &&
    css`
      position: relative;
      font-size: 18px;
      font-weight: 900;
      background-color: transparent;
      color: ${({ theme: { color } }) => color.primary};
      border: none;
      overflow: hidden;
      cursor: pointer;
      ::after {
        content: " ";
        position: absolute;
        display: block;
        bottom: 13px;
        left: 13px;
        height: 1px;
        width: 100%;
        background-color: ${({ theme: { color } }) => color.primary};
        transform: translateX(-150%);
        transition: 300ms;
      }
      :hover {
        background-color: transparent;
        color: ${({ theme: { color } }) => color.primary};
        border: none;
        ::after {
          transform: translateX(0%);
        }
      }
    `}
  ${({ secondary }) =>
    secondary &&
    css`
      color: ${({ theme: { color } }) => color.secondary};
      ::after {
        background-color: ${({ theme: { color } }) => color.secondary};
      }
      :hover {
        background-color: transparent;
        color: ${({ theme: { color } }) => color.secondary};
        border: none;
        ::after {
          transform: translateX(0%);
        }
      }
    `}
`;

export default Button;
