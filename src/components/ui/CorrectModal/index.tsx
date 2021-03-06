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
        <h4 className="text-3xl">π¦ HIT π―</h4>
        <p>ζ­£θ§£β¨ εγ―ε°ζ₯γγγγγ«γͺγγγ¨ιιγγͺγπ</p>
        <div className="flc gap-6">
          <Button onClick={() => router.back()}>γγ£γΌγ«γγ«ζ»γ</Button>
          <Button
            onClick={() =>
              window.open(
                'https://twitter.com/intent/tweet?text=γγγγγ³γΌγγΌγ§ζ₯½γγεεΌ·δΈ­π¦%0aει‘γδΈγ€γ―γͺγ’γγγβ¨%0a%0a&url=https://atarime-coder.vercel.app/%0a&hashtags=progLearning',
                '_blank',
                'noopener,noreferrer'
              )
            }
          >
            γγ€γΌγγγπ¦
          </Button>
        </div>
      </div>
    </Modal>
  );
};
