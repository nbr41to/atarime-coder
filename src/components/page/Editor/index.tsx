import type { FC } from 'react';

import { useState } from 'react';
// import AceEditor from 'react-ace';

import { Editor } from 'src/components/model/Editor';

export const EditorPage: FC = () => {
  const [value, setValue] = useState('console.log("Hello World!");');

  return (
    <div className="flex justify-center">
      <div className="h-[800px] w-[600px] py-4 px-6">
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
  );
};
