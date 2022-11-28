import { useEffect } from 'react';

import type { AppProps } from 'next/app';

import Footer from '../components/common/Footer';
import Navigation from '../components/common/Navigation';
import GlobalStyles from '../styles/globalStyles';
import { themeHandler } from '../utils/themeHandler';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    themeHandler('auto');
  }, []);

  return (
    <>
      <GlobalStyles />
      <Navigation />
      <main
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '70px',
          minHeight: '100vh',
        }}
      >
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
