import * as React from 'react';

const SvgInfo = (props) => (
  <svg
    data-type="monochrome"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 12 12"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="currentColor"
      d="M6 0a6 6 0 100 12A6 6 0 006 0zm-.693 8.59V5.843a.693.693 0 111.386 0V8.59a.693.693 0 11-1.386 0zM6 4.393a.833.833 0 110-1.666.833.833 0 010 1.666z"
    />
  </svg>
);

SvgInfo.type = 'monochrome';
export default SvgInfo;
