import Head from "next/head";

import { Test, FirstBlack } from "@/components/Test";

export default function Home() {
  return (
    <>
      <Head>
        <title>Page router with emotion</title>
      </Head>
      <div>
        <main>
          <FirstBlack>
            <Test>Test</Test>
          </FirstBlack>
        </main>
      </div>
    </>
  );
}
