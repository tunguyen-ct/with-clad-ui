import * as React from 'react';

const SvgFollow = (props) => (
  <svg
    data-type="monochrome"
    viewBox="0 0 80 60"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <defs>
      <path id="follow_svg__a" d="M0 .02h36.963v41.427H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <rect fill="currentColor" width={80} height={60} rx={8} />
      <path
        d="M58.5 18a1.12 1.12 0 00-1.12 1.12v6.26h-6.26a1.12 1.12 0 100 2.24h6.26v6.26a1.12 1.12 0 102.24 0v-6.26h6.26a1.12 1.12 0 000-2.24h-6.26v-6.26c0-.619-.5-1.12-1.12-1.12"
        fill="#FFF"
      />
      <g transform="translate(16 8)">
        <mask id="follow_svg__b" fill="#fff">
          <use xlinkHref="#follow_svg__a" />
        </mask>
        <path
          d="M35.47 30.59c-.72-.55-12.074-5.737-12.114-6.737 0 0-.042-.374.166-1.081.166-.457.414-1.04.83-1.747 0 0 .663-.873 1.41-2.454a19.357 19.357 0 001.7-10.19s.125-7.903-8.96-8.36l-.02.001-.021-.001C9.375.478 9.5 8.38 9.5 8.38a19.356 19.356 0 001.7 10.19c.747 1.58 1.411 2.454 1.411 2.454.415.707.664 1.29.83 1.747.207.707.166 1.081.166 1.081-.04 1-11.395 6.186-12.114 6.737C.124 31.672 0 33.17 0 33.17v3.651a4.621 4.621 0 004.615 4.627h27.733a4.621 4.621 0 004.615-4.627V33.17s-.125-1.497-1.494-2.579"
          fill="#FFF"
          mask="url(#follow_svg__b)"
        />
      </g>
    </g>
  </svg>
);

SvgFollow.type = 'monochrome';
export default SvgFollow;
