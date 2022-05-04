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

  const previousField = localStorage.getItem('previousField');
  const previousCoordinate = localStorage.getItem('previousCoordinate');

  const closeHandler = () => setIsOpen(false);
  const startHandler = () => setIsOpen(true);
  const nameDecided = () => {
    localStorage.setItem('userName', nameState);
    router.push('/field/a-1');
  };
  const continueHandler = () => {
    router.push(`/field/${previousField}`);
  };

  return (
    <>
      <div>
        {previousField && previousCoordinate ? (
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
        <h2>イカした名前を決めてください。</h2>
        <Input
          value={nameState}
          onChange={(e) => setNameState(e.target.value)}
        />
        <Button onClick={nameDecided}>決定</Button>
      </Modal>
    </>
  );
};
