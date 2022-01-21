import * as React from 'react';

const SvgArrowDown = (props) => (
  <svg
    data-type="monochrome"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 25"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g fill="currentColor">
      <path d="M9.846 24.583a1.042 1.042 0 01-1.042-1.041v-22.5a1.042 1.042 0 112.083 0v22.5a1.04 1.04 0 01-1.041 1.041z" />
      <path d="M9.846 24.583c-.277 0-.542-.109-.738-.304L.304 15.475A1.044 1.044 0 011.779 14l8.067 8.083L17.916 14a1.044 1.044 0 011.476 1.475l-8.809 8.804c-.196.195-.46.304-.737.304z" />
    </g>
  </svg>
);

SvgArrowDown.type = 'monochrome';
export default SvgArrowDown;
