import * as React from 'react';

const SvgCircleUser = (props) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    data-type="color"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g fill="none">
      <circle fill="#CACACA" cx={16} cy={16} r={16} />
      <path
        d="M23.244 19.08c-.3-.2-5.2-2.5-5.3-2.9 0 0 0-.2.1-.5l.4-.8s.3-.4.6-1.1c.5-1 .9-2.5.7-4.4 0 0 .1-3.4-3.9-3.6-4 .2-3.9 3.6-3.9 3.6-.2 2 .3 3.6.7 4.5.3.7.6 1.1.6 1.1.2.3.3.6.4.8.1.3.1.5.1.5 0 .4-5 2.7-5.3 2.9-.6.5-.6 1.1-.6 1.1s-.2.6.3 1.3c.2.3.5.6.7.8.9.9 1.9 1.6 3.1 2.1 1.2.5 2.5.8 3.8.8 1.3 0 2.6-.3 3.8-.8 1.2-.5 2.2-1.2 3.1-2.1.2-.2.4-.5.6-.7.7-.7.5-1.5.5-1.5s.1-.6-.5-1.1"
        fill="#FFF"
      />
    </g>
  </svg>
);

SvgCircleUser.type = 'color';
export default SvgCircleUser;
