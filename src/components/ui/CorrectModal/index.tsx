import type { FC } from 'react';

import { useRouter } from 'next/router';

import { Button } from '../Button';
import { Modal } from '../Modal';

type Props = {
  isOpen: boolean;
  close: () => void;
};

export const CorrectModal: FC<Props> = ({ isOpen, close }) => {
  const router = useRouter();

  return (
    <Modal size="middle" isOpen={isOpen} close={close}>
      <div className="space-y-4 text-center">
        <h4 className="text-3xl">🦑 HIT 🎯</h4>
        <p>正解✨ 君は将来あたりめになること間違いなし👍</p>
        <Button onClick={() => router.back()}>フィールドに戻る</Button>
      </div>
    </Modal>
  );
};
