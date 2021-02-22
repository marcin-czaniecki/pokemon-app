// import original module declaration
import "styled-components";

// and extend it
declare module "styled-components" {
  export interface DefaultTheme {
    fontFamily: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    color: {
      primary: string;
      secondary: string;
      tertiary: string;
      background: string;
      backgroundsecondary: string;
    };
    screenSize: {
      tablet: string;
      desktop: string;
    };
  }
}

export const theme = {
  fontFamily: {
    primary: `'Raleway', sans-serif`,
    secondary: `"Indie Flower", cursive`,
    tertiary: `poke`
  },
  color: {
    primary: "#ffde00",
    secondary: "#ff0000",
    tertiary: "#3d4cca",
    background: "#263238",
    backgroundsecondary: "#fff"
  },
  screenSize: {
    tablet: "765px",
    desktop: "1000px"
  }
};
