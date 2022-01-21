import * as React from 'react';

const SvgSellFaster = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    data-type="monochrome"
    viewBox="0 0 20 20"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <defs>
      <path id="sell-faster_svg__a" d="M0 0h19.102v19.354H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="sell-faster_svg__b" fill="#fff">
        <use xlinkHref="#sell-faster_svg__a" />
      </mask>
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M17.27 6.018l2.137 1.235-6.25 10.825a1.494 1.494 0 01-1.906.624l-.126-.065-8.548-4.935a1.489 1.489 0 01-.599-1.911l.067-.129.741-1.288h-.312a.5.5 0 110-1h2.948a.5.5 0 010 1H3.926l-1.027 1.782a.5.5 0 00.044.566l.061.062.073.052 8.548 4.935c.21.12.472.068.625-.113l.052-.074 5.75-9.959-1.283-.74.5-.867zM8.382 9.375a.5.5 0 010 1H7.41a.5.5 0 010-1h.974zm-3.948-2a.5.5 0 010 1H.5a.5.5 0 010-1h3.935zM15.851.58c1.597.922 2.17 2.943 1.333 4.59l-.092.168-1.75 3.031-.854-.493 1-1.733-3.42-1.974.5-.866 3.42 1.974.25-.433c.635-1.1.35-2.476-.62-3.22l-.13-.093-.137-.085c-1.133-.655-2.576-.296-3.3.791l-.087.14-1.75 3.031-.855-.493 1.75-3.032C12.075.21 14.199-.373 15.85.581zM8.295.837L10.43 2.07l-.5.866-1.282-.74-1.835 3.178h.582a.5.5 0 010 1H2.474a.5.5 0 110-1h3.2L8.294.837z"
        mask="url(#sell-faster_svg__b)"
      />
    </g>
  </svg>
);

SvgSellFaster.type = 'monochrome';
export default SvgSellFaster;
