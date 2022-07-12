import { AppProps } from 'next/app';
import Head from 'next/head';
import Footer from '../components/home/footer';
import Header from '../components/home/header';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to store!</title>
      </Head>
      <Header />
      <main className="flex flex-col min-h-screen min-w-full">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default CustomApp;
