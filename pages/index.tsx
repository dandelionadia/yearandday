import Head from "next/head";
import { Grid } from "../atoms/Grid";
import { ProductItem } from "../components/ProductItem";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div className="container">
      <Grid>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <ProductItem categoryId="abc-123" />
      </Grid>
    </div>
  );
}
