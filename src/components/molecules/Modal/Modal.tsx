import styled from "styled-components";
import { delateIcon } from "assets/icons/icons";
import Toggle from "components/atoms/Toggle/Toggle";
import { IModal } from "interfaces/interfaces";

const Wrapper = styled.article<{ active: boolean; right?: boolean }>`
  @keyframes come {
    0% {
      transform: translateX(${({ right }) => (right ? "100%" : "-100%")});
    }
    100% {
      transform: translateX(0%);
    }
  }
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  height: 100%;
  width: 100%;
  padding-top: 20px;
  margin-bottom: 20px;
  background-color: ${({ theme: { color } }) => color.tertiary};
  flex-direction: column;
  transition: 1s;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 3;
  border-right: solid 2px ${({ theme: { color } }) => color.primary};
  transition: 1s;
  animation: come 1s;
`;

const Modal = ({ children, active, right, closeClick }: IModal) => {
  return (
    <>
      {active && (
        <Wrapper active={active} right={right}>
          <Toggle
            active={active}
            activeIcon={delateIcon}
            deactivateIcon={delateIcon}
            onClick={closeClick}
            close
          />
          {children}
        </Wrapper>
      )}
    </>
  );
};

export default Modal;
