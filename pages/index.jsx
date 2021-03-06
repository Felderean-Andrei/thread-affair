import Head from 'next/head';
import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thread Affair</title>
        <meta name="description" content="Generated by create next app"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>

      <Header></Header>

      <Main></Main>

      <Footer></Footer>
    </div>
  );
}
