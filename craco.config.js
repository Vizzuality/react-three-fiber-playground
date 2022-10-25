module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.module.rules = webpackConfig.module.rules.map((rule) => {
        if (rule.oneOf) {
          rule.oneOf = [
            // Need to add as second-to-last to avoid being intercepted by the file-loader in CRA
            ...rule.oneOf.slice(0, -1),
            {
              test: /\.(glsl|frag|vert)$/,
              exclude: [/node_modules/],
              use: ["raw-loader", "glslify-loader"]
            },
            ...rule.oneOf.slice(-1)
          ];
        }
        return rule;
      });
      // .unshift({
      //   test: /\.(glsl|frag|vert)$/,
      //   use: [
      //     require.resolve('raw-loader'),
      //     require.resolve('glslify-loader'),
      //   ]
      // });

      console.log(webpackConfig.module.rules);
      return webpackConfig;
    },
  }
}