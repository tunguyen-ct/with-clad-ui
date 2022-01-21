import * as React from 'react';

const SvgChat = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-type="monochrome"
    viewBox="0 0 18 22"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <g transform="translate(1 4)">
        <ellipse cx={7.5} cy={5.692} fill="currentColor" rx={1} ry={1.004} />
        <ellipse cx={4.239} cy={5.692} fill="currentColor" rx={1} ry={1.004} />
        <ellipse cx={10.761} cy={5.692} fill="currentColor" rx={1} ry={1.004} />
        <path
          stroke="currentColor"
          d="M9.986 14.611l.835-3.728H13.5a1 1 0 001-1V1.5a1 1 0 00-1-1h-12a1 1 0 00-1 1v8.384a1 1 0 001 1l5.706-.001 2.78 3.728z"
        />
      </g>
      <path stroke="#FFF" strokeWidth={0.1} d="M1 1h16v20H1z" opacity={0.01} />
    </g>
  </svg>
);

SvgChat.type = 'monochrome';
export default SvgChat;
