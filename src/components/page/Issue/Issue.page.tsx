import type { FC } from 'react';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { AnswerView } from 'src/components/model/Issue/AnswerView';
import { IssueView } from 'src/components/model/Issue/IssueView';
import { Button } from 'src/components/ui/Button';
import { CorrectModal } from 'src/components/ui/CorrectModal';
import { IncorrectModal } from 'src/components/ui/IncorrectModal';
import { answers } from 'src/const/issues/answers';
import { localStorage } from 'src/utils/localStorage';

export const IssuePage: FC = () => {
  const router = useRouter();
  const issueId = router.asPath.split('/')[2].split('?')[0];
  const isCleared = localStorage.getFlags().includes(issueId);
  const [visibleDiffEditor, setVisibleDiffEditor] = useState(false);
  const [value, setValue] = useState('console.log("Hello World!");\n');
  const [isOpenCorrectModal, setIsOpenCorrectModal] = useState(false);
  const [isOpenIncorrectModal, setIsOpenIncorrectModal] = useState(false);

  /* 動的 import */
  const Text = dynamic(() => import(`src/const/issues/${issueId}.mdx`), {
    ssr: false,
  });

  const checkAnswer = () => {
    /* Proof of correct */
    const userAnswerMap = value
      .replaceAll('\n', '')
      .replaceAll('\r', '')
      .replaceAll('"', "'")
      .replaceAll(' ', '');
    const answerMap = answers[issueId]
      .replaceAll('\n', '')
      .replaceAll('\r', '')
      .replaceAll('"', "'")
      .replaceAll(' ', '');

    if (userAnswerMap === answerMap) {
      localStorage.setFlags(issueId);
      setIsOpenCorrectModal(true);
    } else {
      setIsOpenIncorrectModal(true);
    }
  };

  return (
    <>
      {/* クリア済みラベル */}
      {isCleared && (
        <div className="absolute top-0 right-0 pr-2">
          <div className="rotate-45 before:absolute before:-right-[120px] before:-top-[160px]  before:-z-10 before:h-[220px] before:w-[220px] before:bg-gray-200 before:content-['']" />
          <div className="relative z-10 text-xl font-bold">CLEARED</div>
          <div className="relative z-10 text-right text-4xl">🎯</div>
        </div>
      )}

      {/* Main View */}
      <div className="flex h-full flex-col items-center justify-center">
        {visibleDiffEditor ? (
          <AnswerView answer={answers[issueId]} userAnswer={value} />
        ) : (
          <IssueView value={value} setValue={setValue} MdComponent={Text} />
        )}

        <div className="mt-12 space-x-8">
          {visibleDiffEditor ? (
            <Button onClick={() => setVisibleDiffEditor(false)}>戻る</Button>
          ) : (
            <>
              <Button onClick={() => router.back()}>フィールドに戻る</Button>
              <Button onClick={checkAnswer}>答え合わせ</Button>
              <Button onClick={() => setVisibleDiffEditor(true)}>
                解答を見る
              </Button>
            </>
          )}
        </div>
      </div>

      {/* 正解Modal */}
      <CorrectModal
        isOpen={isOpenCorrectModal}
        close={() => setIsOpenCorrectModal(false)}
      />
      {/* 不正解Modal */}
      <IncorrectModal
        isOpen={isOpenIncorrectModal}
        close={() => setIsOpenIncorrectModal(false)}
      />
    </>
  );
};
