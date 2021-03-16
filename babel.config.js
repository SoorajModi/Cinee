const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: ["./src/"],
      alias: {
        "@assets": "./src/assets",
        "@components": "./src/components",
        "@atoms": "./src/components/atoms",
        "@molecules": "./src/components/molecules",
        "@organisms": "./src/components/organisms",
        "@navigations": "./src/navigations",
        "@scenes": "./src/scenes",
        "@services": "./src/services",
        "@styles": "./src/styles",
        "@utils": "./src/utils"
      }
    }

  ]

];

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: plugins,
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },

  };
};
