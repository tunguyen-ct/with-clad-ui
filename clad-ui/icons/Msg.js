import * as React from 'react';

const SvgMsg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 68 30"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <defs>
      <filter
        id="msg_svg__a"
        width="109.4%"
        height="123.1%"
        x="-4.7%"
        y="-11.5%"
        filterUnits="objectBoundingBox"
      >
        <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={1} />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0.466666667 0 0 0 0 0.466666667 0 0 0 0 0.466666667 0 0 0 1 0"
        />
      </filter>
      <path
        id="msg_svg__b"
        d="M62 0a2 2 0 012 2v16a2 2 0 01-2 2H21l-9 6v-6H2a2 2 0 01-2-2V2a2 2 0 012-2h60z"
      />
    </defs>
    <g transform="translate(2 2)" fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#msg_svg__a)" xlinkHref="#msg_svg__b" />
      <use fill="#FFF" xlinkHref="#msg_svg__b" />
    </g>
  </svg>
);

SvgMsg.type = 'color';
export default SvgMsg;
