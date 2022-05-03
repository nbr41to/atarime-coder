import StackBlitzSdk from '@stackblitz/sdk';
import { Project } from '@stackblitz/sdk/typings/interfaces';
import { FC, useEffect } from 'react';

type Props = {
  project: Project;
};

export const Editor: FC<Props> = ({ project }) => {
  useEffect(() => {
    StackBlitzSdk.embedProject('ide_block', project, {
      view: 'editor',
      width: '600px',
      height: '600px',
      // hideNavigation: true,
      // hideExplorer: true,
      devToolsHeight: 200,
    });
  }, [project]);

  return <div id="ide_block" />;
};
