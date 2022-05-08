import type { FC } from 'react';

import { useRouter } from 'next/router';

import { Button } from 'src/components/ui/Button';
import { StartButton } from 'src/components/ui/StartButton';
import { localStorage } from 'src/utils/localStorage';

export const IndexPage: FC = () => {
  const router = useRouter();
  const userName = localStorage.getUserName();
  const previousField = localStorage.getPreviousField();
  const previousCoordinate = localStorage.getPreviousCoordinate();

  return (
    <div className="space-y-4 p-12 text-center">
      <p>イカに転生してプログラミングを勉強しよう！</p>
      <p className="text-sm">※パソコン💻 で遊んでね！</p>
      <div>
        <StartButton />
      </div>
      {userName && previousField && previousCoordinate && (
        <div>
          <Button
            color="danger"
            onClick={() => {
              if (typeof window === 'undefined') return;
              const result = window.confirm('本当にデータを削除しますか？');
              if (result) {
                localStorage.clear();
                window.alert('削除が完了しました。');
                router.reload();
              }
            }}
          >
            お試し版データの削除
          </Button>
        </div>
      )}
    </div>
  );
};
