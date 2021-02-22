import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: poke;
    src: url("https://uploads.codesandbox.io/uploads/user/106c33fb-afe6-4256-8be8-3bfaab73b325/qOI9-Pokemon+Solid.ttf")  format("truetype");
  }
*{
  box-sizing:border-box;
    ::-webkit-scrollbar {
      width: 10px;
      height: 20px; 
      background:rgba(0, 0, 0, 0.2);
      border-radius: 0;
    }
    ::-webkit-scrollbar-thumb {
        height: 6px;
        background-color: ${({ theme }) => theme.color.primary};
    }
    ::-webkit-scrollbar-button {
        width: 0;
        height: 0;
        display: none;
    }
    ::-webkit-scrollbar-corner {
        background-color: transparent;
    }
    @media (max-width:${({ theme }) => theme.screenSize.tablet}) {
      ::-webkit-scrollbar {
        display:none;
      }
    }}
}
  body{
    margin:0;
    background-color: ${({ theme: { color } }) => color.background};
  font-family:${({ theme: { fontFamily } }) => fontFamily.primary};
  font-size:16px;
  overflow: hidden;
  }

`;

export default GlobalStyle;
