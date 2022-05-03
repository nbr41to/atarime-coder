import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import Head from 'next/head';

import { FieldPage } from 'src/components/page/Field/Field.page';
import { mapA } from 'src/const/maps/map_a';

type Params = {
  mapId: string;
};

type Props = {
  map: FieldMap;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  return {
    paths: [{ params: { mapId: 'a-1' } }, { params: { mapId: 'a-2' } }],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  if (typeof params === 'undefined') {
    throw new Error('params is undefined');
  }
  const { mapId } = params || {};

  return {
    props: {
      map: mapA[mapId],
    },
  };
};

const Map: NextPage<Props> = ({ map }) => {
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
