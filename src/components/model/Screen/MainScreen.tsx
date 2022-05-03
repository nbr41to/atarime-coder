import { FC, useEffect } from 'react';

import { Field } from 'src/components/model/Field';
import { useMapAction } from 'src/hooks/useMapAction';

import { FieldInfo } from '../FieldInfo';

type Props = {
  map: FieldMap;
};

export const MainScreen: FC<Props> = ({ map }) => {
  const { coordinate, message, onKeyDown } = useMapAction(map);

  useEffect(() => {
    document.getElementById('screen')?.focus();
  }, [coordinate]);

  return (
    <div
      id="screen"
      className="flex justify-center gap-4 outline-none"
      role="menu"
      tabIndex={0}
      onKeyDown={(e) => onKeyDown(e)}
    >
      <Field blocks={map.blocks} coordinate={coordinate} />
      <FieldInfo message={message} />
    </div>
  );
};
