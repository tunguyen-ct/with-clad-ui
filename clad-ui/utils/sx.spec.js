import sx from './sx';

describe('utils/sx', () => {
  it('should process regular styled object properly', () => {
    const css = sx({
      color: '#222222',
      fontSize: '1em',
      margin: '24px',
      padding: '8px',
      width: '50%',
      height: '326px',
      borderRadius: '4px',
      fontFamily: 'sans-serif',
    });
    expect(css).toEqual({
      color: '#222222',
      fontSize: '1em',
      margin: '24px',
      padding: '8px',
      width: '50%',
      height: '326px',
      borderRadius: '4px',
      fontFamily: 'sans-serif',
    });
  });

  it('should process themable styled object properly', () => {
    // transform against default chotot theme
    const css = sx({
      color: 'text',
      bg: 'background',
      fontSize: 'md',
      m: 'lg',
      p: 'xs',
      size: 'xxxxxl',
      minHeight: '$md',
      borderRadius: 'sm',
      fontFamily: 'body',
    });
    expect(css).toEqual({
      color: '#222222',
      backgroundColor: '#F4F4F4',
      fontSize: '1rem',
      margin: '24px',
      padding: '8px',
      width: '128px',
      height: '128px',
      minHeight: '480px',
      borderRadius: '4px',
      fontFamily: 'Helvetica, Arial, Roboto, sans-serif',
    });
  });
});
