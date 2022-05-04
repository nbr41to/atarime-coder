import type { AppProps } from 'next/app';

import Head from 'next/head';

import { Layout } from 'src/components/ui/Layout';
import 'styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  // const router = useRouter();
  // const pageChangeHandler = () => {
  //   const answer = window.confirm(
  //     'コメント内容がリセットされます、本当にページ遷移しますか？'
  //   );
  // };

  // useEffect(() => {
  //   router.events.on('hashChangeStart', pageChangeHandler);

  //   return () => {
  //     router.events.off('hashChangeStart', pageChangeHandler);
  //   };
  // }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
