import * as React from 'react';

const SvgCircleCopylink = (props) => (
  <svg
    data-type="color"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <circle fill="#8C9DAA" cx={50} cy={50} r={50} />
    <path
      fill="#FFF"
      stroke="#8C9DAA"
      d="M71 47.6L61.7 57c-5.2 5.2-13.6 5.2-18.7 0-.8-.8-1.5-1.7-2-2.7l4.4-4.4c.2-.2.5-.3.7-.5.3 1 .8 2 1.6 2.8 2.6 2.6 6.8 2.6 9.4 0l9.4-9.4c2.6-2.6 2.6-6.8 0-9.4-2.7-2.4-6.9-2.4-9.5.2l-3.3 3.3c-2.7-1.1-5.6-1.3-8.4-.9l7.1-7.1c5.2-5.2 13.6-5.2 18.7 0 5.1 5.1 5.1 13.5-.1 18.7zM46.3 63L43 66.3a6.64 6.64 0 01-9.4 0c-2.6-2.5-2.6-6.7 0-9.3l9.4-9.4c2.6-2.6 6.8-2.6 9.4 0 .8.8 1.3 1.8 1.6 2.8.2-.1.5-.3.7-.5l4.4-4.3c-.6-.9-1.2-1.9-2-2.7-5.2-5.2-13.6-5.2-18.7 0L29 52.3c-5.2 5.2-5.2 13.6 0 18.7 5.2 5.2 13.6 5.2 18.7 0l7.1-7.1c-2.9.4-5.8.2-8.5-.9z"
    />
  </svg>
);

SvgCircleCopylink.type = 'color';
export default SvgCircleCopylink;
