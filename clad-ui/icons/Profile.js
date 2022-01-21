import * as React from 'react';

const SvgProfile = (props) => (
  <svg
    data-type="monochrome"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 16"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M4.6 5.6c.2-1 1.2-1.6 2.1-1.4s1.6 1.2 1.4 2.1C8 7 7.4 7.6 6.7 7.7c-1 .2-1.9-.4-2.1-1.4-.1-.2-.1-.5 0-.7M9.5 12c0 .3-.2.5-.5.5H3.8c-.3 0-.5-.2-.5-.5v-.6c0-1.6 1.2-2.9 2.7-3.1 1.7-.2 3.2 1 3.4 2.7v1z"
    />
    <path
      fill="currentColor"
      d="M18 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2m0 1.5c.3 0 .5.2.5.5v12c0 .3-.2.5-.5.5H2c-.3 0-.5-.2-.5-.5V2c0-.3.2-.5.5-.5h16"
    />
    <path
      fill="currentColor"
      d="M16.5 10.2h-4.8c-.4 0-.8-.3-.8-.8 0-.4.3-.8.8-.8h4.8c.4 0 .8.3.8.8s-.4.8-.8.8m0-2.6h-4.8c-.4 0-.8-.3-.8-.8 0-.4.3-.8.8-.8h4.8c.4 0 .8.3.8.8s-.4.8-.8.8"
    />
  </svg>
);

SvgProfile.type = 'monochrome';
export default SvgProfile;
