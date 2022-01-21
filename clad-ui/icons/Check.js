import * as React from 'react';

const SvgCheck = (props) => (
  <svg
    data-type="monochrome"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 12"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path fill="currentColor" d="M6.096 12L0 6.154l2.104-2.04 3.935 3.773L13.839 0 16 1.986z" />
  </svg>
);

SvgCheck.type = 'monochrome';
export default SvgCheck;
