const plugins = [
  [
    '@babel/plugin-transform-runtime',
    {
      regenerator: true
    }
  ]
];

if (process.env.WEBPACK_DEV_SERVER) {
  plugins.push('react-refresh/babel');
}

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
        modules: 'auto'
      }
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic'
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins
};
