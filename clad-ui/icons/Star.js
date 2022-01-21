import * as React from 'react';

const SvgStar = (props) => (
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
      fill="currentColor"
      d="M9 14.5l-5.29 2.781 1.01-5.89L.44 7.219l5.915-.86L9 1l2.645 5.36 5.915.859-4.28 4.172 1.01 5.89z"
      fillRule="evenodd"
    />
  </svg>
);

SvgStar.type = 'monochrome';
export default SvgStar;
