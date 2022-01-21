import * as React from 'react';

const SvgCircleCheck = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-type="monochrome"
    viewBox="0 0 18 22"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g fill="none" fillRule="evenodd" transform="translate(1 1)">
      <circle cx={8} cy={10} r={7.5} stroke="currentColor" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.2}
        d="M4.414 10.924l2.924 2.11 4.248-6.068"
      />
      <path stroke="#FFF" strokeWidth={0.1} d="M0 0h16v20H0z" opacity={0.01} />
    </g>
  </svg>
);

SvgCircleCheck.type = 'monochrome';
export default SvgCircleCheck;
