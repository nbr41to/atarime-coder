import { useRouter } from 'next/router';
import { FC } from 'react';

import { Button } from 'src/components/ui/Button/Button';

export const IndexPage: FC = () => {
  const router = useRouter();

  return (
    <div className="p-12">
      <p>イカに転生してプログラミングを勉強しよう！</p>
      <Button onClick={() => router.push('/field/a-1')}>始める</Button>
    </div>
  );
};
