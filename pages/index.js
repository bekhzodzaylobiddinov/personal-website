import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import initOciliator from "../scripts/osciliator";
import Loading from "../components/Loading";
import Canvas from "../components/Canvas";

export default function Home() {
  useEffect(() => {
    initOciliator(false);
  }, []);

  return (
    <>
      <Head>
        <title>Zokir Rakhimov</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Canvas width="813" height="894" />
      <Header />
    </>
  );
}
