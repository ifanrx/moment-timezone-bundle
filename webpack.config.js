const webpack = require('webpack')
const WITH_LOCALE = process.env.WITH_LOCALE === '1'

module.exports = {
  entry: './src/index.js',
  output: {
    path: require('path').join(__dirname, 'lib'),
    filename: WITH_LOCALE ? 'with-locale.js' : 'without-locale.js',
    library: "moment-timezone-bundle", // string,
    libraryTarget: "umd", // universal module definition
  },
  plugins: [].concat(WITH_LOCALE ? [] : [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)]),
  devtool: "source-map"
}