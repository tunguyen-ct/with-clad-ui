import theme from './mudah';

const themeName = 'mudah';

describe(`${themeName} theme`, () => {
  it('should match current snapshot', () => {
    expect(theme).toMatchSnapshot();
  });
});
