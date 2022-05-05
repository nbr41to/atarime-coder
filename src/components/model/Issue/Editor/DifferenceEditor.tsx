import type { FC } from 'react';

import { DiffEditor } from '@monaco-editor/react';

import { Loader } from 'src/components/ui/Loader';

type Props = {
  original: string;
  modified: string;
};

export const DifferenceEditor: FC<Props> = ({ original, modified }) => {
  return (
    <DiffEditor
      theme="vs-dark"
      width={1200}
      height={700}
      language="javascript"
      original={original}
      modified={modified}
      loading={<Loader />}
      beforeMount={(monaco) => {
        /* フォントサイズの変更 */
        if (monaco) {
          // eslint-disable-next-line no-param-reassign
          monaco.editor.EditorOptions.fontSize.defaultValue = 18;

          // console.log('beforeMount', monaco);
        }
      }}
    />
  );
};
