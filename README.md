# Create a fresh new Next.js project

```
yarn create next-app myapp
```
# Install some dependencies

```
yarn add linaria@1.4.1 clad-ui
```

Clad-UI requires `react-laag`

```
yarn add react-laag
```

Clad-UI requires `lodash` (FIXME IF THIS IS UNNECESSARY)

```
yarn add lodash
```

Linaria loader needs `@babel/core`

```
yarn add -D @babel/core
```

Clad-UI needs `next-transpile-modules` to be injected into next.js.

```
yarn add next-transpile-modules
```

Clad-UI needs `babel-plugin-module-resolver` to do `theming`

```
yarn add -D babel-plugin-module-resolver
```

# Babel

Create a `babel.config.js` file at root

```js
const path = require("path");

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
        "@clad-ui/theme": ["./theme/index.js"],
      },
    },
  ],
];

module.exports = function (api) {
  api.cache(true);
  return { presets, plugins };
};
```

# JS Config

Create a `jsconfig.json` file at root

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@clad-ui/theme": ["./theme/index.js"]
    }
  }
}
```

# .gitignore

Add this line at the end of `.gitignore` file

```
# linaria
.linaria-cache
```

# Theme

Create a `./theme/index.js` file at root

```js
import theme from "clad-ui/theme/chotot";

const appTheme = {
  ...theme,
};

export default appTheme;
```

# With Clad-UI

Create a `with-clad-ui.js` file at root

```js
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
        rule.options.modules.mode = "local";
        rule.options.modules.auto = true;
        rule.options.modules.exportGlobals = true;
        rule.options.modules.exportOnlyLocals = false;
        rule.options.modules.getLocalIdent = (
          context,
          _,
          exportName,
          options
        ) => {
          if (context.resourcePath.includes(LINARIA_EXTENSION)) {
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
```

# next.config.js

Create a `next.config.js` file at root

```js
const withTM = require("next-transpile-modules")(["clad-ui"]);
const withCladUI = require("./with-clad-ui");

const nextConfig = {};

module.exports = withTM(withCladUI(nextConfig));
```

# CSS Baseline

In `./pages/_app.js`, add this line to the top of file

```
import 'clad-ui/css/baseline';
```

# Let's try some Clad-UI components

In `./pages/index.js`, add the following code:

```js
import { Button, Input } from 'clad-ui'

export default function Home() {
  return (
      <div>
        <Button>Click me</Button>
        <Input label='Enter your name'/>
      </div>
  )
}
```

Done! Hope you enjoy Clad-UI like we do. 

# Made with ❤️ at Chotot
