import Head from "next/head";
import { Grid } from "../atoms/Grid";
import { ProductItem } from "../components/ProductItem";
import { Cart } from "../components/Cart";

export default function Home() {
  return (
    <div className="container">
      <Grid>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
          <ProductItem />
          <Cart />
        </Head>
      </Grid>
    </div>
  );
}
