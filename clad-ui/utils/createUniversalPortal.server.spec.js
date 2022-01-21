/**
 * @jest-environment node
 */
import React from 'react';
import createUniversalPortal from './createUniversalPortal';

describe('createUniversalPortal at server side', () => {
  it('should work but store children at createUniversalPortal.portals', () => {
    const children = React.createElement('div', { className: 'test' });
    createUniversalPortal(children);
    expect(createUniversalPortal.portals[0]).toBe(children);
  });
});
