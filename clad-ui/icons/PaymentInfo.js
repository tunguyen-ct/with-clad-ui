import * as React from 'react';

const SvgPaymentInfo = (props) => (
  <svg
    data-type="monochrome"
    viewBox="0 0 70 51"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <defs>
      <path id="payment-info_svg__a" d="M0 .097h69.974v31.971H0z" />
      <path id="payment-info_svg__c" d="M0 .049h69.974v10.954H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(0 18.22)">
        <mask id="payment-info_svg__b" fill="#fff">
          <use xlinkHref="#payment-info_svg__a" />
        </mask>
        <path
          d="M62.626 12.336L51.896 23.42c-.322.334-.692.476-1.24.476-.488 0-.951-.178-1.24-.476l-4.46-4.609a1.833 1.833 0 01-.518-1.31c.01-.428.178-.813.471-1.086.36-.335.86-.541 1.336-.541.387 0 .758.135 1.03.447l3.54 3.334 9.4-9.714c.342-.353.8-.547 1.269-.536.413.011.786.184 1.05.487l.045.049c.341.353.53.83.518 1.31a1.517 1.517 0 01-.471 1.085zM35.95 18.742H6.354V16.08H35.95v2.66zm-29.597 4.57h21.535v-2.094H6.354v2.094zM0 .097v25.88c0 3.365 2.638 6.091 5.892 6.091h58.19c3.254 0 5.892-2.726 5.892-6.092V.096H0z"
          fill="currentColor"
          mask="url(#payment-info_svg__b)"
        />
      </g>
      <mask id="payment-info_svg__d" fill="#fff">
        <use xlinkHref="#payment-info_svg__c" />
      </mask>
      <path
        d="M64.082.049H5.892C2.638.049 0 2.779 0 6.137v4.866h69.974V6.137c0-3.359-2.638-6.088-5.892-6.088"
        fill="currentColor"
        mask="url(#payment-info_svg__d)"
      />
    </g>
  </svg>
);

SvgPaymentInfo.type = 'monochrome';
export default SvgPaymentInfo;
