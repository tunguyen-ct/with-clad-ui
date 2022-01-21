import * as React from 'react';

const SvgGallery = (props) => (
  <svg
    data-type="monochrome"
    viewBox="0 0 60 60"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g transform="translate(0 -.004)" fill="none" fillRule="evenodd">
      <ellipse fill="currentColor" cx={30} cy={29.741} rx={30} ry={29.741} />
      <path
        fill="#FFF"
        d="M30.259 39.257L19.229 45l2.107-12.164-8.922-8.615 12.33-1.774 5.515-11.068 5.514 11.068 12.33 1.774-8.922 8.615L41.287 45z"
      />
    </g>
  </svg>
);

SvgGallery.type = 'monochrome';
export default SvgGallery;
