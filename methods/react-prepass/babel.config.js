module.exports =  {
  babelrc: false,
  presets: [
    [
      '@babel/preset-env',
      { modules: 'commonjs', useBuiltIns: 'entry', corejs: '2', exclude: ['es6.promise', 'es7.promise.finally'] },
    ],
    ['@babel/preset-react', { development: false, useBuiltIns: true }],
  ],
  plugins: [
    'babel-plugin-macros',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    ['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }],
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-syntax-async-generators',
    '@babel/plugin-syntax-dynamic-import',
    ['@babel/plugin-transform-destructuring', { useBuiltIns: true }],
    ['@babel/plugin-transform-runtime', { helpers: false, regenerator: true }],
    '@babel/plugin-transform-react-constant-elements',
    '@babel/plugin-transform-react-inline-elements',
  ]
};
