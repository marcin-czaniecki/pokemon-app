import styled from "styled-components";

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 300px;
  margin: 0 auto;
  padding-top: 20px;
  color: ${({
    theme: {
      color: { primary }
    }
  }) => primary};
  @media screen and (min-width: ${({ theme: { screenSize } }) =>
      screenSize.tablet}) {
    width: 740px;
  }
  @media screen and (min-width: ${({ theme: { screenSize } }) =>
      screenSize.desktop}) {
    width: 1000px;
  }
  div {
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    a {
      text-decoration: none;
      padding: 10px 5px 1px;
      margin: 0;
      margin-right: auto;
      font-family: ${({ theme }) => theme.fontFamily.primary};
      font-weight: 400;
      color: ${({
        theme: {
          color: { secondary }
        }
      }) => secondary};
      :hover {
        opacity: 0.9;
      }
    }
    p {
      margin: 0;
    }
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <div>
        <p>The icons used are from icons8</p>
        <a
          href="https://icons8.com/icon/131/search"
          target="_blank"
          rel="noreferrer"
        >
          https://icons8.com/icon/131/search
        </a>
        <a
          href="https://icons8.com/icon/71200/delete"
          target="_blank"
          rel="noreferrer"
        >
          https://icons8.com/icon/71200/delete
        </a>
      </div>
      <div>
        Used api is from pokeapi
        <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">
          https://pokeapi.co/
        </a>
      </div>
    </Wrapper>
  );
};

export default Footer;
