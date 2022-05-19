import type { FC } from 'react';

import { useRouter } from 'next/router';
import { useState } from 'react';

import { localStorage } from 'src/utils/localStorage';

import { Button } from '../Button';
import { Input } from '../Input';
import { Modal } from '../Modal';

export const StartButton: FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [nameState, setNameState] = useState('');

  const userName = localStorage.getUserName();
  const previousField = localStorage.getPreviousField();
  const previousCoordinate = localStorage.getPreviousCoordinate();

  const closeHandler = () => setIsOpen(false);
  const startHandler = () => setIsOpen(true);

  const nameDecided = () => {
    if (!nameState) return;
    localStorage.clear();
    localStorage.setUserName(nameState);
    router.push('/field/a-1');
  };
  const continueHandler = () => {
    router.push(`/field/${previousField}`);
  };

  return (
    <>
      <div>
        {userName && previousField && previousCoordinate ? (
          <Button color="secondary" onClick={continueHandler}>
            続きから
          </Button>
        ) : (
          <Button color="secondary" onClick={startHandler}>
            始める
          </Button>
        )}
      </div>

      <Modal isOpen={isOpen} close={closeHandler}>
        <p>
          俺は気がついたら森にいた。覚えていることは、前世は人間だったことと、自分の名前だけだ。どうやらイカになって海を飛び出してしまったようだ。これはとんだイカれ野郎だぜ。
        </p>
        <br />
        <p>
          そんな俺のイカした名前は{' '}
          <Input
            value={nameState}
            onChange={(e) => setNameState(e.target.value)}
          />{' '}
          だ。
        </p>
        <div className="mt-4 text-center">
          <Button onClick={nameDecided}>決定</Button>
        </div>
      </Modal>
    </>
  );
};
