import { FC } from 'react';

import { Editor } from 'src/components/model/Editor';

export const EditorPage: FC = () => {
  return (
    <div>
      <Editor
        project={{
          files: {
            'index.html': '<h1>Hello World!</h1>',
            'index.js': 'console.log("Hello World!");',
          },
          title: 'test',
          description: 'test',
          template: 'javascript',
        }}
      />
    </div>
  );
};
