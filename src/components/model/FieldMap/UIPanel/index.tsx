import type { FC } from 'react';
import type { FieldCoordinate } from 'src/types/field';

import { useRouter } from 'next/router';

import { Button } from 'src/components/ui/Button';
import { localStorage } from 'src/utils/localStorage';

type Props = {
  message: string;
  coordinate: FieldCoordinate;
};

export const UIPanel: FC<Props> = ({ message, coordinate }) => {
  const router = useRouter();
  const userName = localStorage.getUserName();
  const flags = localStorage.getFlags();

  const saveAndGoTop = () => {
    localStorage.setPreviousField(router.asPath.split('/')[2]);
    localStorage.setPreviousCoordinate(coordinate);
    router.push('/');
  };

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

      <div className="w-[300px] rounded border-4 border-double border-black px-4  py-2">
        <p className="font-pixel font-bold">NAME: {userName}</p>
      </div>

      <div className="min-h-[100px] w-[300px] rounded border-4 border-double border-black px-4  py-2">
        <p className="font-pixel whitespace-pre-wrap">{message}</p>
      </div>

      <div className="text-xl">🚩 {flags.length}</div>

      <div>
        <Button color="secondary" onClick={saveAndGoTop}>
          セーブしてやめる
        </Button>
      </div>
    </div>
  );
};
