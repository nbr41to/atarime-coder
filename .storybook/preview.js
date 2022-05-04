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
