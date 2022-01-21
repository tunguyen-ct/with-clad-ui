import * as React from 'react';

const SvgSticky = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-type="monochrome"
    viewBox="0 0 60 60"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <ellipse
      fill="currentColor"
      cx={29.9}
      cy={30}
      rx={29.8}
      ry={30}
      transform="translate(0 -.004)"
    />
    <path
      d="M23.077 41.696c-1-.4-1.7-1.4-2.3-2.3-.4-.5-.7-1.1-1.1-1.4l-.1-.1-3.4 8.6 4.1-.3 2.5 3.8 3.5-8.7c-.1 0-.2.1-.3.1-.7.2-1.3.5-2 .5-.3 0-.6-.1-.9-.2m15.1-3.6c-.4.3-.8.8-1.3 1.4-.7.9-1.5 1.9-2.7 2.3-1.2.4-2.4 0-3.5-.3-.1 0-.2-.1-.4-.1l4.2 8.7 2.9-3.8 5 .3-4-8.6c-.1 0-.1.1-.2.1m-3.3-12.9c-.2.2-.4.5-.5.7-.1.3-.1.6-.1.9 0 .3 0 .6-.2.8-.1.2-.5.3-.8.4-.3.1-.6.2-.9.4-.3.2-.4.4-.6.6-.2.3-.4.5-.7.6-.2.1-.5 0-.9-.1-.3-.1-.6-.2-1-.2-.3 0-.6.1-1 .2-.3.1-.7.2-.9.1-.2-.1-.5-.3-.7-.6-.2-.2-.4-.5-.6-.6-.3-.2-.6-.3-.9-.4-.3-.1-.7-.2-.8-.4-.1-.2-.2-.5-.2-.8 0-.3 0-.6-.1-.9-.1-.3-.3-.5-.5-.7-.2-.3-.4-.5-.4-.8 0-.2.2-.5.4-.8.2-.2.4-.5.5-.7.1-.3.1-.6.1-.9 0-.3 0-.6.2-.8.1-.2.5-.3.8-.4.3-.1.6-.2.9-.4.3-.2.4-.4.6-.6.2-.3.4-.5.7-.6h.2c.2 0 .4.1.7.1.3.1.6.2 1 .2.3 0 .6-.1 1-.2.3-.1.7-.2.9-.1.2.1.5.3.7.6.2.2.4.5.6.6.3.2.6.3.9.4.3.1.7.2.8.4.1.2.2.5.2.8 0 .3 0 .6.1.9.1.3.3.5.5.7.2.3.4.5.4.8.1.3-.1.5-.4.8m8.6-3.3c-.5-.6-.9-1.3-1.2-2-.3-.8-.3-1.6-.3-2.3 0-.9 0-1.7-.4-2.2-.4-.5-1.2-.8-2.1-1.1-.8-.2-1.5-.5-2.2-1-.6-.5-1.1-1.1-1.6-1.7-.6-.7-1.1-1.4-1.7-1.6-.6-.2-1.4.1-2.3.3-.8.2-1.6.5-2.4.5-.8 0-1.6-.2-2.4-.5-.6-.1-1.2-.3-1.7-.3-.2 0-.3 0-.5.1-.6.2-1.2.8-1.7 1.6-.5.6-1 1.3-1.6 1.7-.7.4-1.5.7-2.2.9-.9.3-1.7.6-2.1 1.1-.4.5-.4 1.3-.4 2.2 0 .8 0 1.6-.3 2.3-.2.7-.7 1.4-1.2 2-.5.7-1 1.4-1 2.1s.5 1.4 1.1 2.1c.5.6.9 1.3 1.2 2 .3.8.3 1.6.3 2.3 0 .9 0 1.7.4 2.2.4.5 1.2.8 2.1 1.1.8.3 1.5.5 2.2 1 .6.5 1.1 1.1 1.6 1.7.6.7 1.1 1.4 1.7 1.6.6.2 1.4-.1 2.3-.3.8-.2 1.6-.5 2.4-.5.8 0 1.6.2 2.4.5.9.3 1.7.5 2.3.3.6-.2 1.2-.9 1.7-1.6.5-.6 1-1.2 1.6-1.7.7-.5 1.4-.7 2.2-1 .9-.3 1.7-.6 2.1-1.1.4-.5.4-1.3.4-2.2 0-.8 0-1.6.3-2.3.2-.7.7-1.4 1.2-2 .5-.7 1.1-1.4 1.1-2.1-.2-.7-.7-1.4-1.3-2.1"
      fill="#FFF"
    />
  </svg>
);

SvgSticky.type = 'monochrome';
export default SvgSticky;
