import { createGlobalStyle } from "styled-components";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel='icon'
          href='favicon.png'
          sizes='16x16 28x28 32x32'
          type='image/png'
        />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Dancing+Script&family=Fira+Code:wght@400;500&family=Oxygen:wght@300;400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />;
    </>
  );
}

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: Oxygen, Helvetica Neue, sans-serif;
  scroll-behavior: smooth;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;
