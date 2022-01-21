import * as React from 'react';

const SvgUnhideOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-type="monochrome"
    viewBox="0 0 60 60"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M54.1 29.5C49 22.4 39.8 18 30 18S11 22.4 5.9 29.5l-.4.5.4.5C11 37.6 20.2 42 30 42s19-4.4 24.1-11.5l.4-.5-.4-.5zM30 40.4c-9.1 0-17.7-3.9-22.6-10.4 4.9-6.5 13.5-10.4 22.6-10.4S47.7 23.5 52.6 30C47.7 36.5 39.1 40.4 30 40.4z"
    />
    <path
      fill="currentColor"
      d="M30 21.2c-4.6.1-8.2 3.9-8.2 8.8s3.6 8.7 8.2 8.8c4.6-.1 8.2-3.9 8.2-8.8s-3.6-8.7-8.2-8.8zm0 16c-3.7 0-6.8-3.2-6.8-7.2s3.1-7.2 6.8-7.2 6.8 3.2 6.8 7.2-3.1 7.2-6.8 7.2z"
    />
  </svg>
);

SvgUnhideOutline.type = 'monochrome';
export default SvgUnhideOutline;
