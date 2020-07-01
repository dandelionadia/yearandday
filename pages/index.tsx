import Head from "next/head";
import { Grid } from "../atoms/Grid";

export default function Home() {
  return (
    <div className="container">
      <Grid>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </Grid>
    </div>
  );
}
