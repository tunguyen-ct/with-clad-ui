import * as React from 'react';

const SvgChartView = (props) => (
  <svg
    viewBox="0 0 185 70"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="#E0ECFA"
        d="M3 38.282L36.824 4l21.638 29.97 30.266 6.857 18.127-26.033 51.53 10.147L180 4v65.895H3z"
      />
      <path
        stroke="#4A90E2"
        strokeWidth={5}
        d="M2 43L37.885 5l19.441 31.82L89.157 43l18.674-26.029 48.262 12.08L183 5"
      />
    </g>
  </svg>
);

SvgChartView.type = 'color';
export default SvgChartView;
