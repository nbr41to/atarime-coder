import type { NextPage } from 'next';

import Head from 'next/head';

import { MapPage } from 'src/components/page/Map/Map.page';

const Map: NextPage = () => {
  return (
    <>
      <Head>
        <title>map</title>
      </Head>
      <MapPage />
    </>
  );
};

export default Map;
