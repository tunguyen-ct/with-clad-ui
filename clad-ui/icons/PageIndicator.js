import * as React from 'react';

const SvgPageIndicator = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g stroke="#589F39" fill="none" fillRule="evenodd">
      <rect width={17} height={17} x={0.5} y={0.5} fill="#FAFFF8" rx={2} />
      <path
        fill="#589F39"
        fillRule="nonzero"
        strokeWidth={0.2}
        d="M9.228 6.02L7.316 9.045l2.563 2.248L5.987 9.23l3.24-3.21z"
      />
    </g>
  </svg>
);

SvgPageIndicator.type = 'color';
export default SvgPageIndicator;
