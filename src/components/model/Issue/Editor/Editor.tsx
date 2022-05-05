import type { FC } from 'react';

import MonacoEditor from '@monaco-editor/react';

import { Loader } from 'src/components/ui/Loader';

type Props = {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
};

export const Editor: FC<Props> = ({ value, onChange }) => {
  const onChangeHandler = (targetValue: string | undefined) => {
    if (targetValue) {
      onChange(targetValue);
    }
    if (!targetValue) {
      onChange('');
    }
  };

  return (
    <MonacoEditor
      theme="vs-dark"
      width={600}
      height={700}
      defaultLanguage="javascript"
      language="javascript"
      value={value}
      onChange={onChangeHandler}
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
