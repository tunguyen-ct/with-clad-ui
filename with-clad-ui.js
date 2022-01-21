const LINARIA_EXTENSION = ".linaria.module.css";

function traverse(rules) {
  for (const rule of rules) {
    if (typeof rule.loader === "string" && rule.loader.includes("css-loader")) {
      if (
        rule.options &&
        rule.options.modules &&
        typeof rule.options.modules.getLocalIdent === "function"
      ) {
        const nextGetLocalIdent = rule.options.modules.getLocalIdent;
        rule.options.modules.mode = (resourcePath) => resourcePath.endsWith(LINARIA_EXTENSION) ? "local" : "pure"
        rule.options.modules.getLocalIdent = (context,_,exportName,options) => {
          if (context.resourcePath.endsWith(LINARIA_EXTENSION)) {
            return exportName;
          }
          return nextGetLocalIdent(context, _, exportName, options);
        };
      }
    }
    if (typeof rule.use === "object") {
      traverse(Array.isArray(rule.use) ? rule.use : [rule.use]);
    }
    if (Array.isArray(rule.oneOf)) {
      traverse(rule.oneOf);
    }
  }
}

module.exports = (nextConfig = {}) => {
  return {
    ...nextConfig,
    webpack(config) {
      traverse(config.module.rules);
      config.module.rules.push({
        test: /\.(tsx|ts|js|mjs|jsx)$/,
        exclude: /node_modules(?!.*clad-ui)/,
        use: [
          {
            loader: require.resolve("linaria/loader"),
            options: {
              sourceMap: process.env.NODE_ENV !== "production",
              ignore: /node_modules(?!.*clad-ui)/,
              extension: LINARIA_EXTENSION,
            },
          },
        ],
      });
      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }
      return config;
    },
  };
};
