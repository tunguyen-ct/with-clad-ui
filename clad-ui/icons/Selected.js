import * as React from 'react';

const SvgSelected = (props) => (
  <svg
    id="selected_svg__Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    data-type="monochrome"
    viewBox="271.6 394.9 52 52"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <style>{'.selected_svg__st1{fill:#fff}'}</style>
    <path
      d="M297.6 444.9c-13.2 0-24-10.8-24-24s10.8-24 24-24 24 10.8 24 24-10.7 24-24 24z"
      fill="currentColor"
    />
    <path
      className="selected_svg__st1"
      d="M297.6 397.9c12.7 0 23 10.3 23 23s-10.3 23-23 23-23-10.3-23-23 10.4-23 23-23m0-2c-13.8 0-25 11.2-25 25s11.2 25 25 25 25-11.2 25-25-11.2-25-25-25z"
    />
    <path
      className="selected_svg__st1"
      d="M307.9 411.2c-.4-.4-1.1-.4-1.5 0l-12.9 12.7c-.4.4-1.1.4-1.5 0l-3.2-3.1c-.4-.4-1.1-.4-1.5 0l-2 1.9c-.4.4-.4 1 0 1.4l6.6 6.5c.4.4 1.1.4 1.5 0l16.3-16.1c.4-.4.4-1 0-1.4l-1.8-1.9z"
    />
  </svg>
);

SvgSelected.type = 'monochrome';
export default SvgSelected;
