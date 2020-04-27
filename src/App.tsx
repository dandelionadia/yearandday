import React from "react";
import { Text } from "./atoms/Text";
import { Button } from "./atoms/Button";
import Layout from "atomic-layout";
import { Grid } from "../src/atoms/Grid";

Layout.configure({
  defaultUnit: "rem",
});

function App() {
  return (
    <Grid>
      <Text>text</Text>
      <Text small>text small</Text>
      <Text big>text small</Text>
      <Button>btn</Button>
    </Grid>
  );
}

export default App;
