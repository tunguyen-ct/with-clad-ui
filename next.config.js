const withTM = require('next-transpile-modules')(['clad-ui']);
const withCladUI = require('./with-clad-ui');

const nextConfig = {}

module.exports = withTM(withCladUI(nextConfig))
