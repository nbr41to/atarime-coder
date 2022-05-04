import type { FC } from 'react';

import dynamic from 'next/dynamic';

const AceDifferenceEditor = dynamic(
  async () => {
    const { diff } = await import('react-ace');
    await import('ace-builds/src-noconflict/mode-html');
    await import('ace-builds/src-noconflict/mode-css');
    await import('ace-builds/src-noconflict/mode-scss');
    await import('ace-builds/src-noconflict/mode-javascript');
    await import('ace-builds/src-noconflict/mode-typescript');
    await import('ace-builds/src-noconflict/theme-monokai');
    await import('ace-builds/src-noconflict/ext-language_tools');
    await import('ace-builds/src-noconflict/mode-snippets');
    await import('ace-builds/src-noconflict/snippets/javascript');
    await import('ace-builds/src-noconflict/snippets/typescript');

    return diff;
  },
  { ssr: false }
);

type Props = {
  valueArray: string[];
};

export const DifferenceEditor: FC<Props> = ({ valueArray }) => {
  return (
    <AceDifferenceEditor
      value={valueArray}
      mode="javascript"
      theme="monokai"
      name="ace_difference_editor"
      editorProps={{ $blockScrolling: true }}
      readOnly
      fontSize={18}
      width="1200px"
      height="700px"
    />
  );
};
