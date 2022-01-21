import * as React from 'react';

const SvgLocationOutline = (props) => (
  <svg
    data-type="monochrome"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 38"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      d="M15 .405C6.9.405.3 6.905.3 14.905c0 3.9 1.6 7.6 4.1 10.4l10.6 12.1 10.5-12.1c2.5-2.8 4.1-6.5 4.1-10.4 0-8-6.6-14.5-14.6-14.5m0 2.2c6.8 0 12.4 5.5 12.4 12.3 0 3.2-1.3 6.5-3.5 8.9l-8.9 10.3-8.9-10.2c-2.2-2.5-3.5-5.7-3.5-8.9 0-6.9 5.5-12.4 12.4-12.4"
      fill="currentColor"
    />
    <path
      d="M15 20.4c-3.1 0-5.7-2.5-5.7-5.6 0-3.1 2.5-5.6 5.7-5.6 3.1 0 5.7 2.5 5.7 5.6 0 3.1-2.6 5.6-5.7 5.6"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

SvgLocationOutline.type = 'monochrome';
export default SvgLocationOutline;
