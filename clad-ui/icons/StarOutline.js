import * as React from 'react';

const SvgStarOutline = (props) => (
  <svg
    data-type="monochrome"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={0.941}
      d="M9 14l-4.702 2.472.898-5.236-3.804-3.708 5.257-.764L9 2l2.351 4.764 5.257.764-3.804 3.708.898 5.236z"
      fill="none"
    />
  </svg>
);

SvgStarOutline.type = 'monochrome';
export default SvgStarOutline;
