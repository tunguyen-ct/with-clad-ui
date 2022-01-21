import * as React from 'react';

const SvgHouseOutline = (props) => (
  <svg
    data-type="monochrome"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 23 25"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M21.188 23.142h-5.42v-5.115c0-1.23-.45-2.386-1.27-3.255a4.34 4.34 0 00-3.186-1.384 4.34 4.34 0 00-3.186 1.384 4.719 4.719 0 00-1.27 3.255v5.115h-5.42V9.559L11.313 1.7l9.876 7.858v13.583zm1.235-14.437L11.608.101A.55.55 0 0011.313 0a.575.575 0 00-.297.1L.202 8.706A.548.548 0 000 9.134v14.918c0 .275.236.526.496.526h7.3c.26 0 .497-.25.497-.526v-6.025c0-.863.312-1.669.878-2.27a2.92 2.92 0 012.141-.933 2.92 2.92 0 012.141.933c.567.601.879 1.407.879 2.27v6.025c0 .275.236.526.496.526h7.3c.26 0 .496-.25.496-.526V9.134a.552.552 0 00-.201-.429z"
    />
  </svg>
);

SvgHouseOutline.type = 'monochrome';
export default SvgHouseOutline;
