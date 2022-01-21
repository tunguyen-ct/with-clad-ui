import * as React from 'react';

const SvgStats = (props) => (
  <svg
    data-type="monochrome"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path strokeOpacity={0.01} stroke="#FFF" d="M.5.5h19v19H.5z" />
      <path
        d="M8.5 5v11H5V5h3.5zm5 4v7H10V9h3.5zm-10-1v7.998H0V8h3.5zm15-2v9.998H15V6h3.5zm-16 3H1v6h1.5V9zm5-3H6v9h1.5V6zm5 4H11v5h1.5v-5zm5-3H16v7.998h1.5V7zM19 0l-.001.841.001.001-.001.001L19 3h-.999L18 1.551l-5.838 4.141-5.18-3.751L.528 6 0 5.078 7.022.663l5.099 3.691L16.928 1H16V0h3z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

SvgStats.type = 'monochrome';
export default SvgStats;
