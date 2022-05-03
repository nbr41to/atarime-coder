import { useRouter } from 'next/router';
import { FC } from 'react';

import { Screen } from 'src/components/model/Screen';

type Props = {
  map: FieldMap;
};

export const FieldPage: FC<Props> = ({ map }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-12">
      <Screen map={map} />
    </div>
  );
};
