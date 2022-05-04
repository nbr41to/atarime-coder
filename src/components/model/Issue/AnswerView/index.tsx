import type { FC } from 'react';

import { Loader } from 'src/components/ui/Loader';

import { DifferenceEditor } from '../Editor';

type Props = {
  answer: string;
  userAnswer: string;
};

export const AnswerView: FC<Props> = ({ answer, userAnswer }) => {
  return (
    <div className="relative h-[700px] w-[1200px]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Loader />
      </div>
      <div className="absolute -top-8 flex text-center text-gray-200">
        <div className="w-[600px]">解答</div>
        <div className="w-[600px]">あなたの解答</div>
      </div>
      <DifferenceEditor valueArray={[answer, userAnswer]} />
    </div>
  );
};
