import * as React from 'react';

const SvgArrowRight = (props) => (
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
      d="M2 2l8 7.9L2 18"
    />
  </svg>
);

SvgArrowRight.type = 'monochrome';
export default SvgArrowRight;
