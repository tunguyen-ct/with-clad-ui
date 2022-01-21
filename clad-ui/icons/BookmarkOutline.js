import * as React from 'react';

const SvgBookmarkOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-type="monochrome"
    viewBox="0 0 20 20"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      d="M5.947 0C4.052 0 2.5 1.561 2.5 3.456V20l1.543-1.455 5.752-5.431a.285.285 0 01.41 0L17.5 20V3.456C17.5 1.56 15.948 0 14.053 0zm0 1.825h8.106c.902 0 1.619.718 1.619 1.63V15.76l-4.212-3.973a2.143 2.143 0 00-2.922 0l-4.21 3.977V3.456c0-.913.716-1.63 1.618-1.63z"
      fill="currentColor"
    />
  </svg>
);

SvgBookmarkOutline.type = 'monochrome';
export default SvgBookmarkOutline;
