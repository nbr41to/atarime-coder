import type { NextPage } from 'next';

import stackBlitz from '@stackblitz/sdk';
import { useEffect } from 'react';

const Editor: NextPage = () => {
  useEffect(() => {
    stackBlitz.embedProject(
      'stackBlitzEditor',
      {
        files: {
          'index.html': '<h1>Hello World!</h1>',
        },
        title: 'Atatime corder - HTML 1-1',
        description: 'HTML 1-1',
        template: 'html',
      },
      {
        openFile: ['index.html'],
        height: '100%',
        // hideExplorer: true,
        // hideNavigation: true,
        // forceEmbedLayout: true,
      }
    );
  }, []);

  return (
    <div className="h-[800px]">
      <div id="stackBlitzEditor" />
    </div>
  );
};

export default Editor;
