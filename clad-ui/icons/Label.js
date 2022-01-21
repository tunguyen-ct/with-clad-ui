import * as React from 'react';

const SvgLabel = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-type="monochrome"
    viewBox="0 0 60 60"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g transform="translate(0 -.004)">
      <circle fill="currentColor" cx={30} cy={30} r={30} />
      <path
        fill="#FFF"
        d="M30.012 11.667l-20.2 20.2c-.5.5-.5 1.2 0 1.6l14.5 14.6c.5.5 1.2.5 1.6 0l20.2-20.2-.8-15.4-15.3-.8zm7.9 13.6c-1.5 1.5-3.8 1.5-5.3 0s-1.5-3.8 0-5.3 3.8-1.5 5.3 0c1.4 1.5 1.4 3.8 0 5.3z"
      />
    </g>
  </svg>
);

SvgLabel.type = 'monochrome';
export default SvgLabel;
