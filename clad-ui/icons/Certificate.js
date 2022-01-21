import * as React from 'react';

const SvgCertificate = (props) => (
  <svg
    data-type="monochrome"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 20"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M14.4 10.6c-.1-.1-.2-.3-.2-.5v-.6c0-.4-.3-.6-.6-.6H13c-.2 0-.3-.1-.5-.2l-.5-.5c-.3-.2-.7-.2-.9 0l-.5.4c-.1.1-.3.2-.5.2h-.6c-.4 0-.6.3-.6.6v.6c0 .2-.1.3-.2.5l-.5.5c-.3.2-.3.7 0 .9l.5.4c.1.1.2.3.2.5v.6c0 .4.3.6.6.6h.2v3l1.8-1.6 1.8 1.6v-2.9h.2c.4 0 .6-.3.6-.6v-.6c0-.2.1-.3.2-.5l.5-.4c.3-.2.3-.7 0-.9l-.4-.5zM11.5 13c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6zm2.8-8.4H3.8c-.5 0-.8-.4-.8-.8s.3-.8.8-.8h10.5c.4 0 .8.3.8.8s-.4.8-.8.8M8.5 7.1H3.8c-.5 0-.8-.3-.8-.7 0-.4.3-.8.8-.8h4.8c.4 0 .8.3.8.8-.1.4-.5.7-.9.7"
    />
    <path
      d="M16 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2m0 1.5c.3 0 .5.2.5.5v16c0 .3-.2.5-.5.5H2c-.3 0-.5-.2-.5-.5V2c0-.3.2-.5.5-.5h14"
      fill="currentColor"
    />
  </svg>
);

SvgCertificate.type = 'monochrome';
export default SvgCertificate;
