import type { FC } from 'react';

import { DifferenceEditor } from '../Editor';

type Props = {
  answer: string;
  userAnswer: string;
};

export const AnswerView: FC<Props> = ({ answer, userAnswer }) => {
  return (
    <div className="relative h-[700px] w-[1200px]">
      <div className="absolute -top-8 flex text-center text-gray-200">
        <div className="w-[600px]">解答</div>
        <div className="w-[600px]">あなたの解答</div>
      </div>
      <DifferenceEditor original={answer} modified={userAnswer} />
    </div>
  );
};
