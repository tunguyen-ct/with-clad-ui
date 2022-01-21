import * as React from 'react';

const SvgLoan = (props) => (
  <svg
    data-type="monochrome"
    viewBox="0 0 54 54"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g transform="translate(2 2)" fill="none" fillRule="evenodd">
      <path
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 27H0V0h42v18.385M26 26v8.571C26 38.122 31.372 41 38 41s12-2.878 12-6.429V26"
      />
      <path
        d="M26 35v8.571C26 47.122 31.372 50 38 50s12-2.878 12-6.429V35"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        cx={38}
        cy={25.5}
        rx={12}
        ry={6.5}
      />
      <path
        d="M20.119 22.107c-1.794-.199-3.167-1.187-4.119-2.963l1.548-1.544c.777 1.577 1.73 2.366 2.857 2.366 1.492 0 2.238-.814 2.238-2.44 0-.366-.072-.69-.214-.972-.143-.282-.421-.527-.834-.734-.412-.208-1.095-.544-2.047-1.009-1.826-.896-2.738-2.116-2.738-3.66 0-1.13.293-2.075.88-2.84.588-.763 1.397-1.244 2.429-1.443V5h1.405v1.893c1.238.132 2.246.705 3.024 1.718L23.5 10.204c-.667-.863-1.452-1.294-2.357-1.294-.572 0-1.048.182-1.429.547-.38.366-.571.839-.571 1.42 0 .73.508 1.336 1.524 1.818 1.984.946 3.202 1.734 3.654 2.365.453.631.679 1.378.679 2.241 0 1.196-.302 2.22-.905 3.076-.603.855-1.46 1.398-2.571 1.63V24h-1.405v-1.893z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

SvgLoan.type = 'monochrome';
export default SvgLoan;
