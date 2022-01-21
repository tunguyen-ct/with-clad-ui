import noop from './noop';

describe('utils/noop', () => {
  it('should be defined and typeof function', () => {
    expect(noop).toBeDefined();
    expect(typeof noop).toBe('function');
  });

  it('should return undefined', () => {
    expect(noop()).toBeUndefined();
  });
});
