import type { FC } from 'react';
import type { FieldMap } from 'src/types/field';

import {
  MainScreen,
  LoadingScreen,
} from 'src/components/model/FieldMap/Screen';

type Props = {
  fieldMap: FieldMap;
};

export const FieldPage: FC<Props> = ({ fieldMap }) => {
  if (typeof fieldMap === 'undefined') {
    return (
      <div className="p-12">
        <LoadingScreen />
      </div>
    );
  }

  return (
    <div className="p-12">
      <MainScreen fieldMap={fieldMap} />
    </div>
  );
};
