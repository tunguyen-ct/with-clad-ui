import * as React from 'react';

const SvgBookmark = (props) => (
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
      d="M6 0a3.515 3.515 0 00-3.5 3.5V20l1.686-1.584 5.677-5.342c.084-.079.19-.079.274 0L17.5 20V3.5C17.5 1.579 15.921 0 14 0z"
      fill="currentColor"
    />
  </svg>
);

SvgBookmark.type = 'monochrome';
export default SvgBookmark;
