import * as React from 'react';

const SvgFacebookOutline = (props) => (
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
        d="M12.547 4.002L11.015 4C9.294 4 8.181 5.125 8.181 6.867v1.322h-1.54a.24.24 0 00-.241.237v1.916a.24.24 0 00.24.237h1.541v4.833a.24.24 0 00.241.237h2.01a.24.24 0 00.241-.237v-4.833h1.801a.24.24 0 00.241-.237V8.426a.236.236 0 00-.07-.168.243.243 0 00-.17-.07h-1.802v-1.12c0-.538.13-.812.842-.812h1.032a.24.24 0 00.24-.238V4.24a.24.24 0 00-.24-.238z"
      />
    </g>
  </svg>
);

SvgFacebookOutline.type = 'monochrome';
export default SvgFacebookOutline;
