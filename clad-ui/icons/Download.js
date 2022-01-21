import * as React from 'react';

const SvgDownload = (props) => (
  <svg
    data-type="monochrome"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 35 31"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M25 19c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2m-7.6-1.1c.1.1.2.1.4.1s.3 0 .4-.1l8.3-8.6c.1-.1.1-.2.1-.3 0-.1 0-.3-.1-.3h-4.8l-.2-.2V.9c0-.5-.1-1-1.1-1h-5c-1 0-1.1.5-1.1 1v7.6l-.3.2H9.2c-.1.1-.2.2-.2.3 0 .1 0 .2.1.3l8.3 8.6z"
    />
    <path
      fill="currentColor"
      d="M31.9 12.1h-2.2l-2.2 2.3h3.4c.5 0 1 .5 1 1v9c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1v-9c0-.6.4-1 1-1h3.5l-2.2-2.3H3c-1.7 0-3 1.4-3 3v12.4c0 1.7 1.3 3 3 3h28.9c1.6 0 3-1.4 3-3V15.1c0-1.7-1.3-3-3-3"
    />
  </svg>
);

SvgDownload.type = 'monochrome';
export default SvgDownload;
