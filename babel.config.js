const path = require('path');

const presets = [
  "next/babel",
  [
    "linaria/babel",
    {
      ignore: /node_modules(?!.*clad-ui)/,
    },
  ],
];

const plugins = [
  [
    "babel-plugin-module-resolver",
    {
      root: [path.resolve(__dirname, "./")],
      alias: {
        "@clad-ui/theme": "./theme/index.js",
      },
    },
  ],
];

module.exports = function (api) {
  api.cache(true);
  return { presets, plugins };
};

