module.exports = (api) => {
  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: false
      }
    ]
  ]
  const plugins = [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false,
        helpers: true,
        regenerator: true,
        useESModules: false
      }
    ]
  ]

  api.cache(true)

  return {
    presets,
    plugins
  }
}
