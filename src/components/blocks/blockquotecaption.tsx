// import './blockquotecaption.scss';

import * as React from 'react';
import { EditorBlock } from 'draft-js';

export default (props: any) => (
  <cite>
    <EditorBlock {...props} />
  </cite>
);