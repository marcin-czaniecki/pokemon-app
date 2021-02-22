import styled from "styled-components";

const Img = styled.div<{ src?: string; width?: string }>`
  height: 250px;
  width: ${({ width }) => (width ? width : "300px")};
  margin: 0 auto;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: 50%;
`;

export default Img;
