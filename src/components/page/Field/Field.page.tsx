import { FC } from 'react';

import { Screen } from 'src/components/model/Screen';

type Props = {
  map: FieldMap;
};

export const FieldPage: FC<Props> = ({ map }) => {
  return (
    <div className="p-12">
      <Screen map={map} />
    </div>
  );
};
