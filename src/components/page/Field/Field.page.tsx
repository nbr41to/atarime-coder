import { FC } from 'react';

import { MainScreen, LoadingScreen } from 'src/components/model/Screen';

type Props = {
  map: FieldMap;
};

export const FieldPage: FC<Props> = ({ map }) => {
  if (typeof map === 'undefined') {
    return (
      <div className="p-12">
        <LoadingScreen />
      </div>
    );
  }

  return (
    <div className="p-12">
      <MainScreen map={map} />
    </div>
  );
};
