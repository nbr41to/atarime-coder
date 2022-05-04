// https://storybook.js.org/docs/react/writing-stories/decorators
import '../styles/globals.css';

import React from 'react';

export const decorators = [
  (Story) => (
    <div>
      <Story />
      <div id="modal-root" />
    </div>
  ),
];
