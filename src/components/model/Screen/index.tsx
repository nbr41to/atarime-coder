import { FC, useEffect } from 'react';

import { Field } from 'src/components/page/Field';
import { useMapAction } from 'src/hooks/useMapAction';

type Props = {
  map: FieldMap;
};

export const Screen: FC<Props> = ({ map }) => {
  const { coordinate, action, onKeyDown } = useMapAction(map);
  // eslint-disable-next-line no-console
  console.log('Screen', coordinate);

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

      <div className="space-y-4">
        <div className="w-[300px] border-double border-4 border-black rounded min-h-[100px] px-4 py-2 space-y-1">
          <h3 className="text-xl">《 操作方法 》</h3>
          <div className="space-x-4">
            <span>
              上に移動:<kbd>⬆</kbd>/<kbd>W</kbd>
            </span>
            <span>
              下に移動:<kbd>⬇</kbd>/<kbd>S</kbd>
            </span>
          </div>
          <div className="space-x-8">
            <span>
              左に移動:<kbd>⬅</kbd>/<kbd>A</kbd>
            </span>
            <span>
              右に移動:<kbd>➡</kbd>/<kbd>D</kbd>
            </span>
          </div>
        </div>
        <div className="w-[300px] border-double border-4 border-black rounded px-4 py-2  min-h-[100px]">
          <p className="font-pixel font-bold">{action?.message}</p>
        </div>
      </div>
    </div>
  );
};
