import * as React from 'react';

const SvgClock = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-type="monochrome"
    viewBox="0 0 31 31"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g fill="currentColor">
      <path d="M15.648.276C7.192.276.31 7.176.31 15.649c0 8.474 6.88 15.375 15.338 15.375 8.457 0 15.34-6.9 15.34-15.375 0-8.473-6.884-15.373-15.34-15.373zm0 2.68c7.004 0 12.66 5.665 12.66 12.693 0 7.03-5.654 12.695-12.66 12.695S2.99 22.679 2.99 15.649c0-7.028 5.654-12.694 12.658-12.694z" />
      <path d="M12.279 8.988v10.866h9.695v-2.68h-7.013V8.988h-2.682z" />
    </g>
  </svg>
);

SvgClock.type = 'monochrome';
export default SvgClock;