import type { FC } from 'react';

import dynamic from 'next/dynamic';

const AceEditor = dynamic(
  async () => {
    const ace = await import('react-ace');
    await import('ace-builds/src-noconflict/mode-html');
    await import('ace-builds/src-noconflict/mode-css');
    await import('ace-builds/src-noconflict/mode-scss');
    await import('ace-builds/src-noconflict/mode-javascript');
    await import('ace-builds/src-noconflict/mode-typescript');
    await import('ace-builds/src-noconflict/theme-one_dark');
    await import('ace-builds/src-noconflict/ext-language_tools');
    await import('ace-builds/src-noconflict/mode-snippets');
    await import('ace-builds/src-noconflict/snippets/javascript');
    await import('ace-builds/src-noconflict/snippets/typescript');

    return ace;
  },
  { ssr: false }
);

type Props = {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
};

export const Editor: FC<Props> = ({ value, onChange }) => {
  return (
    <AceEditor
      mode="javascript"
      theme="one_dark"
      value={value}
      onChange={onChange}
      name="ace_editor"
      enableBasicAutocompletion
      enableLiveAutocompletion
      enableSnippets
      editorProps={{ $blockScrolling: true }}
      fontSize={18}
      style={{ width: '600px', height: '700px' }}
    />
  );
};
