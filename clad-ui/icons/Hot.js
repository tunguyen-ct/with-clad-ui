import * as React from 'react';

const SvgHot = (props) => (
  <svg
    viewBox="0 0 60 60"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path d="M.471.427L59.397 59.72h.242l.022-20.043.04-39.31z" fill="#FE9900" />
    <path
      d="M23.812 10.511l8.448-8.235 2.026 2.273-3.092 3.013 2.994 3.358 3.093-3.015 2.028 2.272-8.449 8.236-2.028-2.272 3.723-3.629-2.994-3.356-3.722 3.627-2.027-2.272zm12.816 5.52c1.322-1.287 2.714-1.93 4.175-1.93h.122c1.506.037 2.892.762 4.156 2.18 1.26 1.41 1.856 2.906 1.79 4.484-.067 1.577-.78 3.028-2.138 4.352-1.346 1.313-2.776 1.953-4.286 1.92-1.51-.032-2.899-.758-4.166-2.179-1.264-1.417-1.858-2.914-1.784-4.491.076-1.577.785-3.023 2.131-4.335zm2.16 7.956a2.262 2.262 0 001.118.203 3.35 3.35 0 001.35-.397c.445-.234.903-.582 1.376-1.043.507-.494.884-.975 1.131-1.445.245-.468.39-.909.434-1.32a2.566 2.566 0 00-.126-1.176 2.974 2.974 0 00-.58-.969 2.826 2.826 0 00-.873-.67 2.4 2.4 0 00-1.114-.226c-.387.01-.823.134-1.306.373-.483.238-.971.598-1.462 1.076-.505.492-.878.97-1.124 1.434-.248.464-.395.905-.441 1.32-.047.414-.006.806.124 1.173.13.368.325.698.586.99.26.291.562.517.906.677zm9.298-.544l1.634-1.594 6.938 7.777-1.633 1.594-2.457-2.752-6.813 6.641-2.027-2.273 6.813-6.641-2.455-2.752z"
      fill="#FFF"
    />
  </svg>
);

SvgHot.type = 'color';
export default SvgHot;