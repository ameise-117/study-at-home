const path = require('path')

const options = {
  postcssImport: {
    path: path.join(__dirname, 'assets/styles')
  },
  postcssCustomProperties: {
    preserve: false
  },
  postcssPresetEnv: {
    stage: 2,
    features: {
      'custom-properties': true,
      'nesting-rules': true,
      'custom-media-queries': true
    },
    browsers: ['last 2 versions', 'IE >= 11', 'iOS >= 10', 'Android >= 5.0'],
    autoprefixer: {
      cascade: false,
      grid: true
    },
    postcssCalc: {
      mediaQueries: true,
      selectors: true
    }
  }
}

module.exports = {
  map: {
    inline: false,
  },
  plugins: {
    'postcss-import': options.postcssImport,
    'postcss-custom-properties': options.postcssCustomProperties,
    'postcss-preset-env': options.postcssPresetEnv,
    'postcss-calc': options.postcssCalc,
    'postcss-pseudoelements': true,
    'postcss-flexbugs-fixes': true,
    'postcss-flow-root': true,
    'postcss-grid-kiss': true,
    'postcss-will-change': true
  }
}
