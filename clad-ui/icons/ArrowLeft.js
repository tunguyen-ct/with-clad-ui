import * as React from 'react';

const SvgArrowLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 13 20"
    data-type="monochrome"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      d="M11 2L3 9.9l8 8.1"
    />
  </svg>
);

SvgArrowLeft.type = 'monochrome';
export default SvgArrowLeft;
