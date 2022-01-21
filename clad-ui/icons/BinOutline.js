import * as React from 'react';

const SvgBinOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 35"
    data-type="monochrome"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      d="M16.4 12.5c0-.4-.4-.7-.9-.7s-.9.3-.9.7v14.1c0 .4.4.7.9.7s.9-.3.9-.7V12.5zm-6.4 0c0-.4-.4-.7-.9-.7s-.9.3-.9.7v14.1c0 .4.4.7.9.7s.9-.3.9-.7V12.5zm12.7 0c0-.4-.4-.7-.9-.7s-.9.3-.9.7v14.1c0 .4.4.7.9.7s.9-.3.9-.7V12.5z"
      fill="currentColor"
    />
    <path
      d="M26.2 29.6c0 .9-.4 1.8-1 2.5-.7.7-1.6 1-2.5 1H7.3c-1 0-1.8-.4-2.5-1-.7-.7-1-1.6-1-2.5V6.4h22.5l-.1 23.2zM9.3 2.3c0-.5.4-.9.9-.9h9.5c.5 0 .9.4.9.9V5H9.3V2.3zM29.2 5H22V2.3C22 1 21 0 19.7 0h-9.5C9 0 8 1.1 8 2.3V5H.7c-.4 0-.7.4-.7.7 0 .4.3.7.7.7h1.7v23.2c0 2.7 2.2 5 5 5h15.4c2.7 0 4.9-2.2 4.9-5V6.4h1.6c.4 0 .7-.3.7-.7 0-.3-.4-.7-.8-.7z"
      fill="currentColor"
    />
  </svg>
);

SvgBinOutline.type = 'monochrome';
export default SvgBinOutline;
