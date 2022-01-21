import * as React from 'react';

const SvgChart = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-type="monochrome"
    viewBox="0 0 18 18"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <circle cx={9} cy={9} r={9} fill="currentColor" />
      <path
        fill="#FFF"
        fillRule="nonzero"
        stroke="#FFF"
        strokeWidth={0.4}
        d="M14.438 4l.619 3.903-.824 1.192-.516-3.248-5.008 6.924L4.964 9.32l-3.668 2.978.004-1.312L5 7.809l3.649 3.338 4.263-5.893-3.256.516.607-1.109L14.438 4z"
      />
    </g>
  </svg>
);

SvgChart.type = 'monochrome';
export default SvgChart;
