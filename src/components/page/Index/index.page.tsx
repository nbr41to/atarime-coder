import type { FC } from 'react';

import { useRouter } from 'next/router';

import { Button } from 'src/components/ui/Button';
import { StartButton } from 'src/components/ui/StartButton';

export const IndexPage: FC = () => {
  const router = useRouter();

  return (
    <div className="space-y-4 p-12 text-center">
      <p>イカに転生してプログラミングを勉強しよう！</p>
      <div>
        <StartButton />
      </div>
      <div>
        <Button onClick={() => router.push('/field/a-2')}>
          パソコンがある場所へ
        </Button>
      </div>
      <div>
        <Button>お試し版データの削除</Button>
      </div>
    </div>
  );
};
