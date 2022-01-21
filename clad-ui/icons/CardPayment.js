import * as React from 'react';

const SvgCardPayment = (props) => (
  <svg
    data-type="monochrome"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="46.1 128.4 529 356"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      d="M482.8 166.8h-330c-18.5 0-33.4 15-33.4 33.4v26.7h396.9v-26.7c-.1-18.5-15-33.4-33.5-33.4zM119.4 267v142c0 18.5 15 33.4 33.4 33.4h330c18.5 0 33.4-15 33.4-33.4V267H119.4zm222.9 127.4H155.4V383h186.9v11.4zm70-25h-257v-14.6h257v14.6z"
      fill="currentColor"
    />
  </svg>
);

SvgCardPayment.type = 'monochrome';
export default SvgCardPayment;
