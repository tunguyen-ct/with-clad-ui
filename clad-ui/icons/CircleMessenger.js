import * as React from 'react';

const SvgCircleMessenger = (props) => (
  <svg
    data-type="color"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <circle fill="#1C8DFB" cx={50} cy={50} r={50} />
    <path fill="#FFF" d="M54.7 63.8L43 51.3 20 63.8 45.3 37l12 12.6L80 37z" />
  </svg>
);

SvgCircleMessenger.type = 'color';
export default SvgCircleMessenger;
