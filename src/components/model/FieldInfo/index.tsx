import { FC } from 'react';

type Props = {
  message: string;
};

export const FieldInfo: FC<Props> = ({ message }) => {
  return (
    <div className="space-y-4">
      <div className="min-h-[100px] w-[300px] space-y-1 rounded border-4 border-double border-black px-4 py-2">
        <h3 className="text-xl">《 操作方法 》</h3>
        <div className="space-x-6">
          <span>上に移動: ↑/W</span>
          <span>下に移動: ↓/S</span>
        </div>
        <div className="space-x-6">
          <span>左に移動: ←/A</span>
          <span>右に移動: →/D</span>
        </div>
      </div>
      <div className="min-h-[100px] w-[300px] rounded border-4 border-double border-black px-4  py-2">
        <p className="font-pixel font-bold">{message}</p>
      </div>
    </div>
  );
};
