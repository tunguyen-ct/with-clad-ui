import * as React from 'react';

const SvgMailOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-type="monochrome"
    viewBox="0 0 22 22"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g fill="none" fillRule="evenodd" transform="translate(1 1)">
      <circle
        cx={10}
        cy={10}
        r={10}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.5}
      />
      <path
        fill="currentColor"
        d="M4.954 6a.943.943 0 00-.358.07l5.32 4.817c.186.168.392.167.577 0l5.31-4.816A.943.943 0 0015.447 6H4.954zm-.944.833c-.006.044-.01.09-.01.136v6.462c0 .132.028.258.075.373l3.67-3.584L4.01 6.833zm12.38 0l-3.726 3.382L16.33 13.8a.988.988 0 00.07-.368V6.969a1.04 1.04 0 00-.01-.136zm-4.441 4.033l-.82.747a1.382 1.382 0 01-1.848 0l-.82-.742-3.617 3.524a.978.978 0 00.11.005h10.492c.035 0 .07-.002.104-.005l-3.601-3.529z"
      />
    </g>
  </svg>
);

SvgMailOutline.type = 'monochrome';
export default SvgMailOutline;
