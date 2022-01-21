import * as React from 'react';

const SvgPercentMsg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 32 37"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <defs>
      <filter
        id="percent_msg_svg__a"
        width="143.8%"
        height="141.4%"
        x="-21.9%"
        y="-15.2%"
        filterUnits="objectBoundingBox"
      >
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={0.25}
          result="shadowSpreadOuter1"
        />
        <feOffset dy={1} in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={1.5} />
        <feComposite
          in="shadowBlurOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowBlurOuter1"
        />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
      </filter>
      <path
        id="percent_msg_svg__b"
        d="M12 28c.438-1.677.811-2.808 1.12-3.393.46-.877 1.125-1.316 1.387-1.37C19.93 22.107 24 17.391 24 11.746 24 5.259 18.627 0 12 0S0 5.26 0 11.747c0 5.625 4.04 10.326 9.433 11.477.314.067.692.11 1.464 1.546.514.958.882 2.034 1.103 3.23z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(4 3)">
      <use fill="#000" filter="url(#percent_msg_svg__a)" xlinkHref="#percent_msg_svg__b" />
      <use fill="#FFF" stroke="#F1F1F1" strokeWidth={0.5} xlinkHref="#percent_msg_svg__b" />
    </g>
  </svg>
);

SvgPercentMsg.type = 'color';
export default SvgPercentMsg;
