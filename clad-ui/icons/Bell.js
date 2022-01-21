import * as React from 'react';

const SvgBell = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-type="monochrome"
    viewBox="0 0 19.98 24.514"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      d="M9.991 23.028c-.832-.002-1.54-.55-1.786-1.358h3.572c-.247.808-.954 1.356-1.786 1.358m9.267-2.817h-1.205l-.015-10.392c0-4.302-3.063-7.634-7.309-7.986V.723c0-.471-.37-.72-.74-.723-.366.003-.737.252-.737.723v1.11c-4.246.352-7.31 3.684-7.31 7.986l-.013 10.392H.723c-.475 0-.723.374-.723.743 0 .37.248.743.723.743h5.968a3.36 3.36 0 003.299 2.817 3.36 3.36 0 003.298-2.817h5.969c.474 0 .723-.374.723-.743s-.249-.743-.723-.743"
      fill="currentColor"
    />
  </svg>
);

SvgBell.type = 'monochrome';
export default SvgBell;
