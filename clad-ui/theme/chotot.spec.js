import theme from './chotot';

const themeName = 'chotot';

describe(`${themeName} theme`, () => {
  it('should match current snapshot', () => {
    expect(theme).toMatchSnapshot();
  });
});

describe(`${themeName} theme`, () => {
  it('should has all the required theme keys', () => {
    expect(theme.breakpoints).toBeDefined();
    expect(theme.mediaQueries).toBeDefined();
    expect(theme.space).toBeDefined();
    expect(theme.sizes).toBeDefined();
    expect(theme.fonts).toBeDefined();
    expect(theme.fontSizes).toBeDefined();
    expect(theme.lineHeights).toBeDefined();
    expect(theme.fontWeights).toBeDefined();
    expect(theme.colors).toBeDefined();
    expect(theme.borders).toBeDefined();
    expect(theme.borderWidths).toBeDefined();
    expect(theme.borderStyles).toBeDefined();
    expect(theme.radii).toBeDefined();
    expect(theme.shadows).toBeDefined();
    expect(theme.letterSpacings).toBeDefined();
    expect(theme.zIndices).toBeDefined();
    expect(theme.gradients).toBeDefined();
  });
});

describe(`${themeName} theme.colors`, () => {
  it('should has the required semantic color names', () => {
    const { colors } = theme;
    expect(colors.text).toMatch(/#[0-9A-F]{6}/i);
    expect(colors.textLighter).toMatch(/#[0-9A-F]{6}/i);
    expect(colors.link).toMatch(/#[0-9A-F]{6}/i);
    expect(colors.linkActive).toMatch(/#[0-9A-F]{6}/i);
    expect(colors.line).toMatch(/#[0-9A-F]{6}/i);
    expect(colors.background).toMatch(/#[0-9A-F]{6}/i);
    expect(colors.primary).toMatch(/#[0-9A-F]{6}/i);
    expect(colors.secondary).toMatch(/#[0-9A-F]{6}/i);
    expect(colors.accent).toMatch(/#[0-9A-F]{6}/i);
    expect(colors.highlight).toMatch(/#[0-9A-F]{6}/i);
    expect(colors.muted).toMatch(/#[0-9A-F]{6}/i);
    expect(colors.neutral).toMatch(/#[0-9A-F]{6}/i);
    expect(colors.critical).toMatch(/#[0-9A-F]{6}/i);
    expect(colors.info).toMatch(/#[0-9A-F]{6}/i);
    expect(colors.positive).toMatch(/#[0-9A-F]{6}/i);
    expect(colors.caution).toMatch(/#[0-9A-F]{6}/i);
  });
});

describe(`${themeName} theme.fontSizes`, () => {
  it('should define h1-h6 and body', () => {
    const { fontSizes } = theme;
    for (let i = 1; i <= 6; i++) {
      expect(fontSizes[`h${i}`]).toBeDefined();
    }
    expect(fontSizes.body).toBeDefined();
  });
});

describe(`${themeName} theme.sizes`, () => {
  it('should has some percentage keys', () => {
    const { sizes } = theme;
    ['vW', 'vH', 'quarter', 'third', 'half', 'twoThird', 'threeQuarter', 'full'].forEach((key) => {
      expect(sizes[key]).toBeDefined();
    });
  });
});
