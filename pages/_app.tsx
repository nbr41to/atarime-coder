import type { AppProps } from 'next/app';

import Head from 'next/head';

import { Layout } from 'src/components/ui/Layout';
import 'styles/globals.css';

const title = 'あたりめコーダー';
const description = 'イカに転生してプログラミングを学習するゲーム';
const url = 'https://atarime-coder.vercel.app';
const image = '/ogp.png';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta property="image" content={image} />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:url" content={url} key="og:url" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} key="og:image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={url + image} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content={title} />

        <title>{title}</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
