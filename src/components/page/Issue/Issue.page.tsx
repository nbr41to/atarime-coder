import type { FC } from 'react';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { DifferenceEditor, Editor } from 'src/components/model/Editor';
import { Button } from 'src/components/ui/Button';
import { Loader } from 'src/components/ui/Loader';
import { answers } from 'src/const/issues/answers';
import { localStorage } from 'src/utils/localStorage';

export const IssuePage: FC = () => {
  const router = useRouter();
  const issueId = router.asPath.split('/')[2].split('?')[0];
  const [visibleDiffEditor, setVisibleDiffEditor] = useState(false);
  const [value, setValue] = useState('console.log("Hello World!");');

  /* 動的 import */
  const Text = dynamic(() => import(`src/const/issues/${issueId}.mdx`), {
    ssr: false,
  });

  const checkAnswer = () => {
    const userAnswerMap = value.replaceAll('\n', '').replaceAll(' ', '');
    const answerMap = answers[issueId].replaceAll('\n', '').replaceAll(' ', '');
    if (userAnswerMap === answerMap) {
      alert('正解です！');
      localStorage.updateItem('flags', issueId);
    } else {
      alert('不正解です！');
    }
  };

  // useEffect(() => {
  //   router.events.on('routeChangeStart', pageChangeHandler);

  //   return () => {
  //     router.events.off('routeChangeStart', pageChangeHandler);
  //   };
  // }, []);

  return (
    <div className="flex h-full flex-col items-center justify-center">
      {visibleDiffEditor ? (
        <div className="relative h-[700px] w-[1200px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Loader />
          </div>
          <DifferenceEditor valueArray={[answers[issueId], value]} />
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <div className="mdx-styles h-[700px] w-[600px] bg-slate-700 py-4 px-8 text-gray-200">
            <Text />
          </div>
          <div className="relative h-[700px] w-[600px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Loader />
            </div>
            <Editor value={value} onChange={setValue} />
          </div>
        </div>
      )}

      <div className="mt-12 space-x-8">
        {visibleDiffEditor ? (
          <Button onClick={() => setVisibleDiffEditor(false)}>戻る</Button>
        ) : (
          <>
            <Button onClick={() => router.back()}>やめる</Button>
            <Button onClick={checkAnswer}>答え合わせ</Button>
            <Button onClick={() => setVisibleDiffEditor(true)}>
              解答を見る
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
