import type { FC } from 'react';

import { useRouter } from 'next/router';
import { useState } from 'react';
// import AceEditor from 'react-ace';

import { Editor } from 'src/components/model/Editor';
import { Button } from 'src/components/ui/Button/Button';

export const IssuePage: FC = () => {
  const router = useRouter();
  const [value, setValue] = useState('console.log("Hello World!");');

  // useEffect(() => {
  //   router.events.on('routeChangeStart', pageChangeHandler);

  //   return () => {
  //     router.events.off('routeChangeStart', pageChangeHandler);
  //   };
  // }, []);

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <div className="h-[700px] w-[600px] bg-slate-700 py-4 px-6 text-gray-200">
          <h2>Hello World!!</h2>
          <p>さぁ、始めよう</p>
        </div>
        <Editor value={value} onChange={setValue} />
        {/* <AceEditor
        mode="javascript"
        theme="github"
        // onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        enableBasicAutocompletion
        enableLiveAutocompletion
        enableSnippets
        // editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
      /> */}
      </div>
      <div className="mt-12 space-x-8">
        <Button onClick={() => router.back()}>やめる</Button>
        <Button onClick={() => router.back()}>答え合わせ</Button>
        <Button onClick={() => router.back()}>解答を見る</Button>
      </div>
    </div>
  );
};
