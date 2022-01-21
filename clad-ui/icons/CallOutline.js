import * as React from 'react';

const SvgCallOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-type="monochrome"
    viewBox="0 0 22 22"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g fill="none" fillRule="evenodd" transform="translate(1 1)">
      <circle cx={10} cy={10} r={10} stroke="currentColor" strokeWidth={0.5} />
      <path
        fill="currentColor"
        d="M14.517 5.164c-.45-.527-.864-.964-1.363-.964-.225 0-.45.093-.672.275a.088.088 0 00-1.608 1.692c-.159.277-.134.58.075.901.172.266.444.51.683.727.113.101.219.197.303.285.067.07.054.228-.039.445-.216.51-.848 1.309-1.61 2.038-.77.734-1.482 1.208-1.815 1.208a.183.183 0 01-.122-.036c-.133-.112-.255-.247-.385-.389a5.035 5.035 0 00-.443-.447c-.22-.188-.456-.284-.699-.284-.678 0-1.295.735-1.838 1.384a12.6 12.6 0 01-.422.488c-.146.157-.186.374-.117.629.192.702 1.206 1.61 1.709 1.76.273.083.572.124.887.124 1.516 0 3.43-.961 5.122-2.571 1.704-1.621 2.827-3.576 3.005-5.229.117-1.088.034-1.233-.651-2.036z"
      />
    </g>
  </svg>
);

SvgCallOutline.type = 'monochrome';
export default SvgCallOutline;
