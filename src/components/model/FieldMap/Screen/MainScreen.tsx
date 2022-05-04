import type { FC } from 'react';
import type { FieldMap } from 'src/types/field';

import { useEffect } from 'react';

import { Field } from 'src/components/model/FieldMap/Field';
import { useMapAction } from 'src/hooks/useMapAction';

import { UIPanel } from '../UIPanel';

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
      <UIPanel message={message} coordinate={coordinate} />
    </div>
  );
};
