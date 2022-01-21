import * as React from 'react';

const SvgImpression = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-type="monochrome"
    viewBox="0 0 30 30"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <ellipse cx={15.016} cy={14.633} fill="currentColor" rx={14.955} ry={14.633} />
      <g fill="#FFF" transform="translate(3.75 3.75)">
        <path d="M11.294 21.399L7.667 8.11a.353.353 0 01.44-.43l13.113 3.908a.353.353 0 01.042.659l-6.32 2.796a.353.353 0 00-.18.177l-2.807 6.23a.352.352 0 01-.661-.052z" />
        <rect width={1.408} height={5} x={8.125} rx={0.704} />
        <rect
          width={1.408}
          height={4.225}
          x={12.5}
          y={2.5}
          rx={0.704}
          transform="rotate(45 13.204 4.613)"
        />
        <rect
          width={1.408}
          height={4.225}
          x={2.975}
          y={2.271}
          rx={0.704}
          transform="rotate(-45 3.68 4.384)"
        />
        <rect
          width={1.408}
          height={4.225}
          x={3.75}
          y={11.25}
          rx={0.704}
          transform="rotate(-135 4.454 13.363)"
        />
        <rect
          width={1.408}
          height={5}
          x={1.796}
          y={6.461}
          rx={0.704}
          transform="rotate(90 2.5 8.961)"
        />
      </g>
    </g>
  </svg>
);

SvgImpression.type = 'monochrome';
export default SvgImpression;
