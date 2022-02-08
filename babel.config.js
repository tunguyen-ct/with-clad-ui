const path = require('path')

const presets = [
  'next/babel',
  [
    'linaria/babel',
    {
      ignore: /node_modules(?!.*clad-ui)/,
    },
  ],
]

const plugins = [
  [
    'babel-plugin-module-resolver',
    {
      root: [path.resolve(__dirname, './')],
      alias: {
        '@clad-ui/theme': './theme/index.js',
      },
    },
  ],
  [
    'babel-plugin-import',
    {
      libraryName: 'clad-ui',
      customName: (name) => {
        const components = ['Button', 'Input', 'Box'];
        if (components.includes(name)) {
          return `clad-ui/components/${name}/${name}`;
        }
        return name
      },
      libraryDirectory: '',
      camel2DashComponentName: false,
    },
    'clad-ui',
  ],
]

module.exports = function (api) {
  api.cache(true)
  return { presets, plugins }
}