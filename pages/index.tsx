import Head from "next/head";
import { AppBody } from "../src/components/layout/AppBody";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <AppBody>
        <h1>home page</h1>
      </AppBody>
    </>
  );
}
