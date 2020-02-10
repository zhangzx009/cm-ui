// module.exports = {
//   presets: [
//     '@vue/cli-plugin-babel/preset'
//   ]
// }

module.exports = function (api) {
  const { BABEL_MODULE, NODE_ENV } = process.env;
  const useESModules = BABEL_MODULE !== 'commonjs' && NODE_ENV !== 'test';

  api && api.cache(false);

  const buildCompounentsConfig = {
    presets: [
      [
        '@babel/preset-env',
        {
          loose: true,
          modules: useESModules ? false : 'commonjs'
        }
      ],
      [
        '@vue/babel-preset-jsx',
        {
          functional: false
        }
      ]
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: false,
          helpers: true,
          regenerator: false,
          useESModules ,
        }
      ],
      '@babel/plugin-transform-object-assign',
      '@babel/plugin-proposal-optional-chaining'
    ]
  };
  const vueCliConfig =  {
    presets: [
      '@vue/cli-plugin-babel/preset'
    ]
  }


  const babelConfig = (NODE_ENV === 'test') ? vueCliConfig : buildCompounentsConfig

  return babelConfig
};
