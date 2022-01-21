// import fs from 'fs';
// import path from 'path';
import React from 'react';
import { render, waitFor } from '@testing-library/react';

import css from './baseline';

// TODO: find a way to get generated CSS to snapshot
// function getStyle() {
//   const styles = document.getElementsByTagName('style');
//   console.log('head', document.head.innerHTML);
//   for (let i = 0; i < styles.length; i += 1) {
//     console.log('style', i, styles[i]);
//   }
//   return '';
// }

describe('css/baseline', () => {
  it('should match current snapshot', async () => {
    render(<div />);

    await waitFor(() => {
      // expect(getStyle()).toEqual('');

      // const css = fs.readFileSync(
      //   path.resolve('./.linaria-cache/css/baseline.linaria.css'),
      //   'utf8'
      // );
      expect(css).toMatchSnapshot();
    });
  });
});
