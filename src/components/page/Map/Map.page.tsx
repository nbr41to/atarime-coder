import { FC } from 'react';

import { Map } from 'src/components/model/Map';

const blocks = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 2, 0, 0, 3, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
];

export const MapPage: FC = () => {
  return (
    <div className="p-12">
      <div className="flex justify-center gap-4">
        <Map blocks={blocks} initialCoordinates={{ x: 4, y: 9 }} />

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
            <p className="font-pixel font-bold">パソコンを手に入れた。</p>
          </div>
        </div>
      </div>
    </div>
  );
};
