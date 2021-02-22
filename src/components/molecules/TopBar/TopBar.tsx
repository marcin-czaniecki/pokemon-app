import React from "react";
import styled from "styled-components";
import Button from "components/atoms/Button/Button";
import { ITopBar } from "interfaces/interfaces";

const Wrapper = styled.div`
  display: grid;
  width: 300px;
  margin: 0 auto 30px auto;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const TopBar = ({ prev, next }: ITopBar) => {
  return (
    <Wrapper>
      <Button onClick={prev}>prev</Button>
      <Button onClick={next}>next</Button>
    </Wrapper>
  );
};

export default TopBar;
