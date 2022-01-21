import cleanHtml from './cleanHtml';

describe('utils/cleanHtmlRegex', () => {
  it('should strip all dangerous self-closed tags', () => {
    expect(
      cleanHtml(
        '<div><script /><p /><div>abc</div><applet /><embed type="image/jpg" src="pic_trulli.jpg" width="300" height="200"><iframe src="chotot.com" /><map /></div>'
      )
    ).toBe('<div><p /><div>abc</div></div>');

    expect(
      cleanHtml(
        '<div><ul><li><form action="chotot.com" method="POST" /></li><textarea onChange="alert();" /><li><input onChange="alert();" type="submit" value="Submit"></li></ul></div>'
      )
    ).toBe('<div><ul><li></li><li></li></ul></div>');
  });
  it('should strip all dangerous tags with closing tag', () => {
    expect(
      cleanHtml(
        '<div><script>function() {}</script><p /><div>abc</div><applet code="game.class"><param name="difficulty" value="easy"></applet><p>paragraph</p></div>'
      )
    ).toBe('<div><p /><div>abc</div><p>paragraph</p></div>');

    expect(
      cleanHtml(
        '<div><ul><li><textarea onChange="alert();"></textarea></li><map name="planetmap"><area /></map><li><iframe src="chotot.com"></iframe></li></ul></div>'
      )
    ).toBe('<div><ul><li></li><li></li></ul></div>');
  });
  it('should strip all javascript: scheme', () => {
    expect(
      cleanHtml('<div><img src="javascript:alert(\'Executed!\');"><img src="img.jpg"></div>')
    ).toBe('<div><img src><img src="img.jpg"></div>');
    expect(
      cleanHtml(
        '<div><img src = "https://salt.comjavascript:alert(\'Executed!\');"><img src="img.jpg"></div>'
      )
    ).toBe('<div><img src ><img src="img.jpg"></div>');
    expect(
      cleanHtml(
        '<div><img src = "  https://salt.com   javascript:alert(\'Executed!\');moresalt"><img src="img.jpg"></div>'
      )
    ).toBe('<div><img src ><img src="img.jpg"></div>');
  });
});
