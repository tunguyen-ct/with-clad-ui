import React from 'react';
import createUniversalPortal from './createUniversalPortal';

describe('createUniversalPortal at client side', () => {
  it('should work and return an instance of React Portal', () => {
    const children = <div className="test">Some text</div>;
    const portal = createUniversalPortal(children);
    expect(portal.containerInfo).toBeDefined();
    expect(portal.containerInfo.nodeName).toBe('BODY');
    expect(portal.children).toBeDefined();
    expect(portal.children.type).toBe('div');
  });
});
