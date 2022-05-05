import type { ComponentType, FC } from 'react';

import { Editor } from '../Editor';

type Props = {
  value: string;
  // eslint-disable-next-line no-unused-vars
  setValue: (value: string) => void;
  MdComponent: ComponentType;
};

export const IssueView: FC<Props> = ({ value, setValue, MdComponent }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="mdx-styles h-[700px] w-[600px] bg-slate-700 py-4 px-8 text-gray-200">
        <MdComponent />
      </div>
      <div className="h-[700px] w-[600px]">
        <Editor value={value} onChange={setValue} />
      </div>
    </div>
  );
};
