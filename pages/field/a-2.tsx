import type { NextPage } from 'next';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { FieldPage } from 'src/components/page/Field';
import { mapA } from 'src/const/field/map_a';

const Map: NextPage = () => {
  const router = useRouter();
  const map = mapA[router.asPath.split('/')[2].split('?')[0]];

  return (
    <>
      <Head>
        <title>map</title>
      </Head>
      <FieldPage map={map} />
    </>
  );
};

export default Map;
