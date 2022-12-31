import Head from 'next/head';

import Header from '../components/Header';
import Loading from '../components/Loading';
import Canvas from '../components/Canvas';
import Landing from '../components/Landing';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zokir Rakhimov</title>
        <meta name="description" content="Personal Portfolio Page" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Canvas />
      <Header />
      <Landing />
      <Footer absolute={true} />
    </>
  );
}
