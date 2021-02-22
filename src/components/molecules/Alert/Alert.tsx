import React, { useState } from "react";
import styled from "styled-components";
import Button from "components/atoms/Button/Button";
import Title from "components/atoms/Title/Tilte";
import { IAlert } from "interfaces/interfaces";

const Wrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  max-width: 80%;
  padding: 20px 20px 20px;
  color: ${({ theme }) => theme.color.secondary};
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.color.background};
  border: solid 2px ${({ theme }) => theme.color.secondary};
  z-index: 1000;
`;

const Alert = ({ keyAlert, title, children }: IAlert) => {
  const [isAlert, setIsAlert] = useState(
    localStorage.getItem(keyAlert) !== "false"
  );
  return (
    <>
      {isAlert && (
        <Wrapper>
          <Title secondary heading="p">
            {title}
          </Title>
          <p>{children}</p>
          <div>
            <Button
              onClick={() => {
                setIsAlert(false);
                localStorage.setItem(keyAlert, "false");
              }}
              poke
              secondary
            >
              close
            </Button>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default Alert;
