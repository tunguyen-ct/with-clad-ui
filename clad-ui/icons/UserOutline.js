import * as React from 'react';

const SvgUserOutline = (props) => (
  <svg
    data-type="monochrome"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g fill="none" stroke="currentColor">
      <circle cx={15} cy={15} r={14.4} />
      <circle cx={15} cy={12} r={4.5} />
      <path d="M25.442 24.63c-1.453-4.536-5.579-7.807-10.442-7.807-4.932 0-9.106 3.365-10.502 8" />
    </g>
  </svg>
);

SvgUserOutline.type = 'monochrome';
export default SvgUserOutline;
