import type { NextPage } from 'next';

import { useRouter } from 'next/router';

import { FieldPage } from 'src/components/page/Field';
import { mapA } from 'src/const/field/map_a';

const Map: NextPage = () => {
  const router = useRouter();
  const fieldMap = mapA[router.asPath.split('/')[2]];

  return <FieldPage fieldMap={fieldMap} />;
};

export default Map;
