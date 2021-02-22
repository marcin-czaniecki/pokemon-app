import React from "react";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "theme/GlobalStyle";
import { theme } from "theme/theme";
import MainView from "view/MainView";
import Alert from "components/molecules/Alert/Alert";

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <>
          <Alert keyAlert="welcom" title="Find your favorite Pokemon!">
            You can find them by searching for them in Pokemon Flocks of 12 or
            by using the search in the bottom right corner!
          </Alert>
          <GlobalStyle />
          <MainView />
        </>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
