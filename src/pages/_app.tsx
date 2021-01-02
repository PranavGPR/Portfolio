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

        {/* Metadata */}
        <link rel='preconnect' />
        <meta
          name='keywords'
          content='pranav, gpr, realgpr, GPR, REALGPR, PRANAV, pranavgpr, PranavGPR, PRANAVGPR, PRANAVgpr'
        />
        <meta
          name='description'
          content='Hi, I am Pranav. I am a Full Stack Developer. I built web apps using React and NodeJS'
        />
        <meta name='author' content='Pranav' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta http-equiv='X-UA-Compatible' content='ie=edge' />

        {/* Favicon */}
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#2d89ef' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
