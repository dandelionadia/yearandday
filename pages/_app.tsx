import { AppProps } from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Layout from "atomic-layout";
import theme from "../theme";
import { Header } from "../components/Header";
import { ProductItem } from "../components/ProductItem";

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
		background-color: ${({ theme }) => theme.colors.yellow};
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
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <ProductItem />
    </ThemeProvider>
  );
}

export default MyApp;
