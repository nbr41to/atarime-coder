import type { FC } from 'react';

import { Button } from '../Button';
import { Modal } from '../Modal';

type Props = {
  isOpen: boolean;
  close: () => void;
};

export const IncorrectModal: FC<Props> = ({ isOpen, close }) => {
  return (
    <Modal size="small" isOpen={isOpen} close={close}>
      <div className="text-center">
        <h4 className="text-lg font-bold">残念不正解🦑</h4>
        <p className="my-4">このままだとするめになっちゃうぞ</p>
        <Button color="secondary" onClick={close}>
          閉じる
        </Button>
      </div>
    </Modal>
  );
};
