import type { NextPage } from 'next';

import { IssuePage } from 'src/components/page/Issue';

const Editor: NextPage = () => {
  return (
    <div className="h-full bg-slate-900">
      <IssuePage />
    </div>
  );
};

export default Editor;
