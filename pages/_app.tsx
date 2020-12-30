import { createGlobalStyle } from "styled-components";
import Head from "next/head";
import { AppProps } from "next/app";
import { colors } from "../constants/colors";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pranav</title>
        <link rel='icon' href='favicon.ico' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Dancing+Script&family=Fira+Code:wght@400;500&family=Oxygen:wght@300;400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before 
{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 62.5%;
}

body{
  font-family: Oxygen, Helvetica Neue, sans-serif;
  font-size: 1.6rem;
}

a {
  color: ${colors.textcolor};
  text-decoration: none;
}
`;
