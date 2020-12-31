import Head from "next/head";
import { AppProps } from "next/app";
import "../styles/base.scss";
import "../styles/icons.scss";
import "../styles/sociallogos.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pranav</title>
        <link rel='icon' href='favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
