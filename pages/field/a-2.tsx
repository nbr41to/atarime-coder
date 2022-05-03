import type { GetStaticProps, NextPage } from 'next';

import Head from 'next/head';

import { FieldPage } from 'src/components/page/Field/Field.page';
import { mapA } from 'src/const/maps/map_a';

type Props = {
  map: FieldMap;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      map: mapA['a-2'],
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
