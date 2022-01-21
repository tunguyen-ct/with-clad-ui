import * as React from 'react';

const SvgChartImpression = (props) => (
  <svg
    viewBox="0 0 190 68"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="#FE9900"
        opacity={0.17}
        d="M2 47.816l41.081-20.07 26.775 20.07h33.867l20.08-20.07L161.734 4 188 25.908V68H2z"
      />
      <path
        stroke="#FE9900"
        strokeWidth={5}
        d="M2 47l41.081-19.696L69.856 47h33.867l20.08-19.696L161.734 4 188 25.5"
      />
    </g>
  </svg>
);

SvgChartImpression.type = 'color';
export default SvgChartImpression;
