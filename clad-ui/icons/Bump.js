import * as React from 'react';

const SvgBump = (props) => (
  <svg
    data-type="monochrome"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 112 60"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <circle fill="currentColor" cx={30} cy={30} r={30} />
    <path
      fill="#FFF"
      d="M31 15c-.6-.4-1.1-.6-1.6-.6-.6 0-1.1.2-1.5.5l-.1.1c-.1 0-.1.1-.2.1L16.3 26.7c-1 1-1 2.7 0 3.7s2.6 1 3.6 0l6.9-7.1V43c0 1.4 1.1 2.6 2.5 2.6s2.5-1.2 2.5-2.6V23.3l6.9 7.1c1 1 2.6 1 3.6 0s1-2.7 0-3.7L31.2 15.2 31 15z"
    />
    <circle fill="#FFF" cx={75} cy={30} r={29} />
    <circle
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      cx={30}
      cy={30}
      r={28.5}
      transform="translate(52)"
    />
    <path fill="currentColor" d="M85.5 14L72 34.5h8.9L77.5 48 91 27.5h-8.9z" />
  </svg>
);

SvgBump.type = 'monochrome';
export default SvgBump;
