import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to store!</title>
      </Head>
      <main className="flex flex-col min-h-screen min-w-full">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
