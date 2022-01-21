import * as React from 'react';

const SvgViewMore = (props) => (
  <svg
    data-type="monochrome"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g transform="rotate(90 8 9)" fill="none" fillRule="evenodd">
      <circle stroke="currentColor" cx={8} cy={8} r={8} />
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M5 9.266L8.087 6 11 9.29l-.672.71-2.263-2.555L5.651 10z"
      />
    </g>
  </svg>
);

SvgViewMore.type = 'monochrome';
export default SvgViewMore;
