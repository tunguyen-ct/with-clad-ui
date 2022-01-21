import * as React from 'react';

const SvgCircleZalo = (props) => (
  <svg
    data-type="color"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    enableBackground="new 0 0 100 100"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <circle fill="#2D93E2" cx={50} cy={50} r={50} />
    <defs>
      <filter
        id="circle-zalo_svg__a"
        filterUnits="userSpaceOnUse"
        x={16}
        y={-5}
        width={90}
        height={86}
      >
        <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
      </filter>
    </defs>
    <mask maskUnits="userSpaceOnUse" x={16} y={-5} width={90} height={86} id="circle-zalo_svg__b">
      <g filter="url(#circle-zalo_svg__a)">
        <circle fill="#FFF" cx={50} cy={50} r={50} />
      </g>
    </mask>
    <g mask="url(#circle-zalo_svg__b)">
      <g transform="translate(17 -4)">
        <linearGradient
          id="circle-zalo_svg__c"
          gradientUnits="userSpaceOnUse"
          x1={-78.784}
          y1={223.041}
          x2={-78.784}
          y2={222.743}
          gradientTransform="matrix(88 0 0 -84 6977 18794.44)"
        >
          <stop offset={0} stopColor="#fff" />
          <stop offset={1} stopColor="#ebf5f9" />
        </linearGradient>
        <path
          fill="url(#circle-zalo_svg__c)"
          d="M24.7 79.6L8.8 84l2.8-13.8C4.4 62.8 0 52.8 0 41.9 0 18.8 19.7 0 44 0s44 18.8 44 41.9-19.7 41.9-44 41.9c-6.9 0-13.5-1.5-19.3-4.2z"
        />
      </g>
      <g filter="url(#circle-zalo_svg__d)" transform="translate(17 -4)">
        <path d="M24.7 79.6L8.8 84l2.8-13.8C4.4 62.8 0 52.8 0 41.9 0 18.8 19.7 0 44 0s44 18.8 44 41.9-19.7 41.9-44 41.9c-6.9 0-13.5-1.5-19.3-4.2z" />
      </g>
      <g fill="#2D93E2">
        <path d="M35.4 45h8.2c1.5 0 2.3.6 2.5 1.8.2 1.5-.7 2.5-2.3 2.5H31.9c-1.1-.1-2.2-.3-2.7-1.4-.5-1.1-.2-2.1.6-3.1 2.9-3.7 5.9-7.4 8.8-11.1.2-.2.3-.4.5-.7-.2-.2-.4-.1-.7-.1h-6.2c-.5 0-1 0-1.4-.2-1-.2-1.5-1-1.5-1.9 0-.9.6-1.7 1.5-1.9.4-.1.9-.2 1.4-.2h10.1c.6 0 1.2 0 1.8.2 1.3.4 1.8 1.6 1.3 2.8-.5 1.1-1.2 2-1.9 2.9-2.5 3.1-5 6.2-7.4 9.4-.2.3-.3.6-.7 1" />
        <path d="M50.6 41.8c0 .6.2 1.5.8 2.3 1.2 1.6 3.7 1.6 5 0 1.1-1.4 1.1-3.8 0-5.2-.6-.7-1.3-1.1-2.2-1.2-2.2-.1-3.7 1.4-3.6 4.1m6.6-6.9c.5-.6.9-1.1 1.7-1.3 1.5-.3 2.9.7 2.9 2.2V47c0 1-.6 1.8-1.6 2.1-1 .3-2 .1-2.6-.7-.3-.4-.5-.5-.9-.1-1.7 1.4-3.6 1.7-5.7 1-3.4-1.1-4.8-3.7-5.1-6.9-.4-3.4.8-6.4 3.8-8.1 2.6-1.5 5.2-1.4 7.5.6m17.5 6.8c0 1 .2 1.9.8 2.6 1.2 1.6 3.7 1.6 4.9 0 1.1-1.4 1.1-3.8 0-5.3-.6-.7-1.3-1.1-2.3-1.2-2 .1-3.4 1.6-3.4 3.9m-4.8.5c-.1-4.8 3-8.4 7.6-8.6 4.8-.1 8.4 3.1 8.5 7.8.1 4.7-2.8 8.1-7.3 8.6-4.9.4-8.9-3.1-8.8-7.8m-1.4-3.9v8.8c0 1.7-1.5 2.8-3.2 2.4-1-.2-1.7-1.3-1.7-2.4V29.3c.1-1.3 1-2.3 2.4-2.3 1.5 0 2.5.9 2.5 2.4v8.9" />
      </g>
    </g>
  </svg>
);

SvgCircleZalo.type = 'color';
export default SvgCircleZalo;
