import * as React from 'react';

const SvgEditAd = (props) => (
  <svg
    data-type="monochrome"
    viewBox="0 0 37 37"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      d="M35.191 34.944H10.524L35.931 9.538c.411-.411.411-1.07 0-1.398L28.86 1.069c-.411-.411-1.069-.411-1.398 0L.33 28.202a1.042 1.042 0 00-.329.74v7.071c0 .576.411.987.987.987H35.19c.576 0 .987-.411.987-.987 0-.657-.411-1.069-.987-1.069zm-33.218 0v-5.59L28.12 3.206l5.591 5.59L7.647 34.945H1.973z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

SvgEditAd.type = 'monochrome';
export default SvgEditAd;
