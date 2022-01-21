import * as React from 'react';

const SvgLocation = (props) => (
  <svg
    data-type="monochrome"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 29 37"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M14.3.4C6.4.4 0 6.7 0 14.5c0 3.8 1.5 7.4 4 10.1l10.3 11.8 10.3-11.8c2.5-2.7 4-6.3 4-10.1C28.6 6.7 22.2.4 14.3.4m0 2.2c6.7 0 12.1 5.4 12.1 12 0 3.1-1.3 6.3-3.4 8.7l-8.7 9.9-8.7-9.9c-2.2-2.4-3.4-5.6-3.4-8.7 0-6.7 5.4-12 12.1-12"
    />
    <path
      fill="currentColor"
      d="M14.3 19.9c-3.1 0-5.6-2.5-5.6-5.5s2.5-5.5 5.6-5.5c3.1 0 5.6 2.5 5.6 5.5 0 3.1-2.5 5.5-5.6 5.5"
    />
  </svg>
);

SvgLocation.type = 'monochrome';
export default SvgLocation;
