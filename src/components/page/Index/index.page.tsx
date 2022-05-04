import type { FC } from 'react';

import { useRouter } from 'next/router';

import { Button } from 'src/components/ui/Button/Button';

export const IndexPage: FC = () => {
  const router = useRouter();

  return (
    <div className="space-y-4 p-12 text-center">
      <p>イカに転生してプログラミングを勉強しよう！</p>
      <Button onClick={() => router.push('/field/a-1')}>始める</Button>
      <br />
      <Button onClick={() => router.push('/field/a-2')}>
        パソコンがある場所へ
      </Button>
    </div>
  );
};
