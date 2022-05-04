import type { FC } from 'react';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useState } from 'react';
// import AceEditor from 'react-ace';

import { DifferenceEditor, Editor } from 'src/components/model/Editor';
import { Button } from 'src/components/ui/Button/Button';
import { answers } from 'src/const/issues/answers';

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
        <DifferenceEditor valueArray={[answers[issueId], value]} />
      ) : (
        <div className="flex items-center justify-center">
          <div className="mdx-styles h-[700px] w-[600px] bg-slate-700 py-4 px-8 text-gray-200">
            <Text />
          </div>
          <Editor value={value} onChange={setValue} />
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
