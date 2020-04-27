import React from "react";
import { createGlobalStyle } from "styled-components";
import Layout from "atomic-layout";
import { Grid } from "../src/atoms/Grid";
import { ProductItem } from "./molecules/ProductItem";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 14px;
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
`;

Layout.configure({
  defaultUnit: "rem",
});

function App() {
  return (
    <>
      <GlobalStyle />
      <Grid>
        <ProductItem />
      </Grid>
    </>
  );
}

export default App;
