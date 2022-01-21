import * as React from 'react';

const SvgEllipsis = (props) => (
  <svg
    data-type="monochrome"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 59 16"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      d="M0 7.7c0 4.3 3.5 7.7 7.7 7.7s7.7-3.5 7.7-7.7S12 0 7.7 0 0 3.5 0 7.7m21.7 0c0 4.3 3.5 7.7 7.7 7.7s7.7-3.5 7.7-7.7S33.7 0 29.5 0s-7.8 3.5-7.8 7.7m21.8 0c0 4.3 3.5 7.7 7.7 7.7s7.7-3.5 7.7-7.7S55.5 0 51.2 0s-7.7 3.5-7.7 7.7"
      fill="currentColor"
    />
  </svg>
);

SvgEllipsis.type = 'monochrome';
export default SvgEllipsis;
