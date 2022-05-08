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
        <div className="flc gap-6">
          <Button onClick={() => router.back()}>フィールドに戻る</Button>
          <Button
            onClick={() =>
              window.open(
                'https://twitter.com/intent/tweet?text=あたりめコーダーで楽しく勉強中🦑%0a問題を一つクリアしたよ✨%0a%0a&url=https://atarime-coder.vercel.app/%0a&hashtags=progLearning',
                '_blank',
                'noopener,noreferrer'
              )
            }
          >
            ツイートする🐦
          </Button>
        </div>
      </div>
    </Modal>
  );
};
