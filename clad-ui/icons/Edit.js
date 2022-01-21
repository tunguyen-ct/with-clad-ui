import * as React from 'react';

const SvgEdit = (props) => (
  <svg
    data-type="monochrome"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      d="M18.3 6.34l4.9 4.9M6.6 28.04l21.1-21.2-5.3-5.2-21.1 21.2v5.2h5.3z"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

SvgEdit.type = 'monochrome';
export default SvgEdit;
