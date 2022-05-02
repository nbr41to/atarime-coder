import type { AppProps } from 'next/app';

import Head from 'next/head';

import { Layout } from 'src/components/ui/Layout';
import 'styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {/* <link rel="shortcut icon" href="/favicon.png" key="shortcutIcon" /> */}
      {/* <link rel="manifest" href="/manifest.json" /> */}
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default MyApp;
