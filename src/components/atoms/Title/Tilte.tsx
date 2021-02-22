import React from "react";
import styled, { css } from "styled-components";
import { ITitle } from "interfaces/interfaces";

const BodyTitle = styled.h2<ITitle>`
  margin: 0;
  padding-bottom: 10px;
  color: ${({ theme: { color } }) => color.primary};
  font-weight: 900;
  font-family: ${({ theme: { fontFamily }, poke }) =>
    fontFamily[poke ? "tertiary" : "secondary"]};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "24px")};
  text-transform: uppercase;
  outline: none;
  ${({ poke }) =>
    poke &&
    css`
      letter-spacing: 2px;
      text-shadow: 2px 2px 0 ${({ theme: { color } }) => color.tertiary},
        -2px -2px 0 ${({ theme: { color } }) => color.tertiary},
        2px -2px 0 ${({ theme: { color } }) => color.tertiary},
        -0px 2px 0 ${({ theme: { color } }) => color.tertiary},
        -2px 2px 0 ${({ theme: { color } }) => color.tertiary},
        -3px -0px 0 ${({ theme: { color } }) => color.tertiary};
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      color: ${({ theme: { color } }) => color.secondary};
    `}
`;

const Title = ({ heading, poke, fontSize, children, secondary }: ITitle) => {
  return (
    <BodyTitle
      secondary={secondary}
      poke={poke}
      as={heading ? heading : "h2"}
      fontSize={fontSize}
    >
      {children}
    </BodyTitle>
  );
};

export default Title;
