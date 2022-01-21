import * as React from 'react';

const SvgWallet = (props) => (
  <svg
    data-type="monochrome"
    viewBox="0 0 70 60"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <defs>
      <path id="wallet_svg__a" d="M0 .058h69.895v59.734H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        d="M53.958 32.813a3.646 3.646 0 110 7.291 3.646 3.646 0 010-7.291"
        fill="currentColor"
      />
      <mask id="wallet_svg__b" fill="#fff">
        <use xlinkHref="#wallet_svg__a" />
      </mask>
      <path
        d="M64.69 41.872H52.423c-3.05 0-5.577-2.539-5.577-5.6 0-3.062 2.528-5.6 5.577-5.6H64.69v11.2zm-25.05 2.427l-8.838-5.085-7.103 9.716-5.889-3.311 7.702-9.435-8.419-5.05L41.04 20.95l-1.4 23.349zM5.205 9.168c0-2.166 1.785-3.883 3.866-3.883H48.63a3.339 3.339 0 013.346 3.36v4.48H9.071c-2.081 0-3.866-1.792-3.866-3.957zm59.857 16.277h-.371v-3.733c0-4.331-3.198-7.915-7.436-8.512V8.645c0-4.704-3.867-8.587-8.551-8.587H9.07C4.164.058.074 4.016.001 9.018v42.187c0 4.704 3.866 8.587 8.55 8.587h47.588c4.685 0 8.552-3.883 8.552-8.587v-4.107h.371a4.834 4.834 0 004.833-4.853V30.298a4.834 4.834 0 00-4.833-4.853z"
        fill="currentColor"
        mask="url(#wallet_svg__b)"
      />
    </g>
  </svg>
);

SvgWallet.type = 'monochrome';
export default SvgWallet;
