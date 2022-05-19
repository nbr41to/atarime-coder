import type { FC } from 'react';

import { Building } from 'src/components/model/FieldMap/Building';

export const BuildMapPage: FC = () => {
  return (
    <div>
      <h1>マップ編集ページ</h1>
      <Building />
    </div>
  );
};
