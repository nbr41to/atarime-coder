import { FC } from 'react';

type Props = {
  message: string;
};

export const FieldInfo: FC<Props> = ({ message }) => {
  return (
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
        <p className="font-pixel font-bold">{message}</p>
      </div>
    </div>
  );
};
