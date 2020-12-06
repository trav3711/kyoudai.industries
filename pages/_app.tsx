import { ThemeProvider, CSSReset } from '@chakra-ui/react';
import Head from 'next/head';

import customTheme from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <Head>
        <title>Kyoudai Industries</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
