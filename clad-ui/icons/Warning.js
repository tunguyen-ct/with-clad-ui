import * as React from 'react';

const SvgWarning = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 20 17"
    data-type="monochrome"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <defs>
      <path id="warning_svg__a" d="M0 20h20V0H0z" />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(0 -1)">
      <mask id="warning_svg__b" fill="#fff">
        <use xlinkHref="#warning_svg__a" />
      </mask>
      <path
        fill="currentColor"
        d="M11.715 2.797l7.268 12.112a2 2 0 01-1.715 3.03H2.732a2 2 0 01-1.715-3.03L8.285 2.797a2 2 0 013.43 0z"
        mask="url(#warning_svg__b)"
      />
      <circle cx={10} cy={14.5} r={1} fill="#FFF" mask="url(#warning_svg__b)" />
      <rect width={2} height={5} x={9} y={7} fill="#FFF" mask="url(#warning_svg__b)" rx={1} />
    </g>
  </svg>
);

SvgWarning.type = 'monochrome';
export default SvgWarning;
