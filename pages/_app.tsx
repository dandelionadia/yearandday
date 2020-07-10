import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Layout from "atomic-layout";
import { useEffect } from "react";

import theme from "../theme";
import { Header } from "../components/Header";
import { store } from "../store/store";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
     
    ${({ theme }) =>
      Object.keys(theme.colors)
        .map((colorName) => {
          return `--color-${colorName
            .replace(/([A-Z])/, "-$1")
            .toLowerCase()}: ${theme.colors[colorName]}`;
        })
        .join(";")}
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  }

  img {
    width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
  }

  ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

Layout.configure({
  defaultUnit: "rem",
});

function MyApp({ Component, pageProps }: AppProps) {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    const isMockReady =
      process.env.NODE_ENV === "development"
        ? require("../mocks/mocks").worker.start()
        : Promise.resolve();

    isMockReady.then(() => setReady(true));
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
