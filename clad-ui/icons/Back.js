import * as React from 'react';

const SvgBack = (props) => (
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
      d="M19.307 9.397H2.455l6.867-7.334a.718.718 0 00-.004-.978.572.572 0 00-.443-.193.603.603 0 00-.439.196L0 10.092l8.266 8.82a.604.604 0 00.441.196.603.603 0 00.442-.195.725.725 0 00.012-.988L2.42 10.78c.013 0 .025.004.039.004h16.849a.693.693 0 000-1.387"
      fill="currentColor"
    />
  </svg>
);

SvgBack.type = 'monochrome';
export default SvgBack;
