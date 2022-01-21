import * as React from 'react';

const SvgCircleFacebook = (props) => (
  <svg
    data-type="color"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <circle fill="#3B5998" cx={50} cy={50} r={50} />
    <path
      fill="#FFF"
      d="M56.3 33.9H63V24h-7.9c-9.5.3-11.5 5.7-11.6 11.3v4.9H37V50h6.5v26h9.8V50h8l1.5-9.7h-9.5v-3c0-1.9 1.2-3.4 3-3.4z"
    />
  </svg>
);

SvgCircleFacebook.type = 'color';
export default SvgCircleFacebook;
