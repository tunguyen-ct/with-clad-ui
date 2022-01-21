import * as React from 'react';

const SvgBumpTime = (props) => (
  <svg
    data-type="monochrome"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 109 67"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g transform="translate(0 6)">
      <ellipse fill="currentColor" cx={29.9} cy={29.9} rx={29.8} ry={29.9} />
      <path
        fill="#FFF"
        d="M30.5 15.1c0-.1-.1-.1 0 0-.5-.4-1.1-.6-1.6-.6-.6 0-1.1.2-1.5.5l-.1.1c-.1 0-.1.1-.2.2L15.9 26.9c-1 1-1 2.7 0 3.7s2.6 1 3.6 0l6.9-7.2v20c0 1.5 1.1 2.6 2.5 2.6s2.5-1.2 2.5-2.6v-20l6.9 7.2c1 1 2.6 1 3.6 0s1-2.7 0-3.7L30.7 15.2c-.1 0-.1-.1-.2-.1z"
      />
    </g>
    <circle fill="#FFF" cx={75.9} cy={37} r={30} />
    <g stroke="currentColor" strokeWidth={3}>
      <g transform="translate(52 8)">
        <ellipse fill="#FFF" cx={28.5} cy={29} rx={27} ry={27.5} />
        <path fill="none" strokeLinecap="round" d="M23.9 17.5v14.9h17.2" />
      </g>
      <g fill="none">
        <path strokeLinecap="round" d="M73.3 2.5h9.8m16.2 4.1l7.5 7.8" />
        <path strokeLinecap="square" d="M98 15.7l3.4-3.1" />
      </g>
    </g>
  </svg>
);

SvgBumpTime.type = 'monochrome';
export default SvgBumpTime;
