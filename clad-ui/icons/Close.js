import * as React from 'react';

const SvgClose = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-type="monochrome"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M13.712 1.161a.793.793 0 011.06.09.845.845 0 01-.017 1.174L9.16 7.998l5.595 5.572c.32.32.328.845.017 1.174a.793.793 0 01-1.06.09l-.084-.073L8 9.154l-5.628 5.607-.084.073a.793.793 0 01-1.06-.09.845.845 0 01.017-1.174L6.84 7.998 1.245 2.425a.845.845 0 01-.017-1.173.793.793 0 011.06-.09l.084.072L8 6.841l5.628-5.607z"
    />
  </svg>
);

SvgClose.type = 'monochrome';
export default SvgClose;
