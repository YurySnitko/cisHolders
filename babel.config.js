module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          components: './src/components',
          controls: './src/controls',
          routers: './src/routers',
          scenes: './src/scenes',
          store: './src/store',
          utils: './src/utils',
        },
      },
    ],
  ],
};
