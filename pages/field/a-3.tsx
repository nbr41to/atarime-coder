import type { NextPage } from 'next';

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { FieldPage } from 'src/components/page/Field';
import { mapA } from 'src/const/field/map_a';
import { localStorage } from 'src/utils/localStorage';

const Map: NextPage = () => {
  const router = useRouter();
  const fieldMap = mapA[router.asPath.split('/')[2]];

  const flags = localStorage.getFlags();
  const jsAchieves = flags.filter((flag) => flag.includes('js'));

  /* Filter */
  useEffect(() => {
    if (jsAchieves.length < fieldMap.entryFlag) {
      router.back();
    }
  }, []);

  return (
    <>
      <Head>
        <title>map</title>
      </Head>
      <FieldPage fieldMap={fieldMap} />
    </>
  );
};

export default Map;
