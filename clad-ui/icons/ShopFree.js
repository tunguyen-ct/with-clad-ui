import * as React from 'react';

const SvgShopFree = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 102 36"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <defs>
      <linearGradient id="shop_free_svg__c" x1="-2.526%" x2="119.362%" y1="50%" y2="50%">
        <stop offset="0%" stopColor="#FF392C" />
        <stop offset="60.11%" stopColor="#FD7F3A" />
        <stop offset="100%" stopColor="#FE9900" />
      </linearGradient>
      <filter
        id="shop_free_svg__a"
        width="121.1%"
        height="179.2%"
        x="-10.6%"
        y="-35.4%"
        filterUnits="objectBoundingBox"
      >
        <feOffset dy={1} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={3} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
      </filter>
      <path
        id="shop_free_svg__b"
        d="M3.999 2.667A1.334 1.334 0 114 0h86v24H11.083v-.005l-.048-.001a1.334 1.334 0 01.129-2.661h3.829c.693 0 1.262-.528 1.327-1.205l.006-.128c0-.693-.529-1.263-1.205-1.327l-.128-.006H7.829a1.333 1.333 0 010-2.667h5.664c.693 0 1.262-.529 1.327-1.205l.006-.128c0-.693-.529-1.263-1.205-1.328l-.128-.006H9.329a1.333 1.333 0 010-2.666h2.667a1.333 1.333 0 00.125-2.661L11.993 8H7.996a1.333 1.333 0 010-2.667h1.332c.693 0 1.262-.528 1.327-1.205L10.66 4c0-.693-.529-1.263-1.205-1.327l-.128-.006h-5.33zm-.002 2.666a1.333 1.333 0 010 2.667H1.333a1.333 1.333 0 010-2.667h2.664z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(6 5)">
      <use fill="#000" filter="url(#shop_free_svg__a)" xlinkHref="#shop_free_svg__b" />
      <use fill="url(#shop_free_svg__c)" xlinkHref="#shop_free_svg__b" />
      <text fill="#FFF" fontFamily="Helvetica-Bold, Helvetica" fontSize={13} fontWeight="bold">
        <tspan x={24.217} y={19}>
          {'MI\u1EC4N PH\xCD'}
        </tspan>
      </text>
    </g>
  </svg>
);

SvgShopFree.type = 'color';
export default SvgShopFree;
