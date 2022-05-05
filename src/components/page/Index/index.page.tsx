import type { FC } from 'react';

import { useRouter } from 'next/router';

import { Button } from 'src/components/ui/Button';
import { StartButton } from 'src/components/ui/StartButton';
import { localStorage } from 'src/utils/localStorage';

export const IndexPage: FC = () => {
  const router = useRouter();

  return (
    <div className="space-y-4 p-12 text-center">
      <p>イカに転生してプログラミングを勉強しよう！</p>
      <div>
        <StartButton />
      </div>
      <div>
        <Button
          color="danger"
          onClick={() => {
            if (typeof window === 'undefined') return;
            const result = window.confirm('本当にデータを削除しますか？');
            if (result) {
              localStorage.clear();
              router.reload();
            }
          }}
        >
          お試し版データの削除
        </Button>
      </div>
    </div>
  );
};
