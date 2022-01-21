import * as React from 'react';

const SvgHeartOutline = (props) => (
  <svg
    data-type="monochrome"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      d="M13.8 4C6.5 4 2 10.5 2 15.8c0 11.5 12.9 22.2 22 29 9.1-6.8 22-17.5 22-29C46 10.5 41.5 4 34.2 4c-4.1 0-7.6 3.3-10.2 6.4C21.4 7.3 17.9 4 13.8 4"
    />
  </svg>
);

SvgHeartOutline.type = 'monochrome';
export default SvgHeartOutline;
