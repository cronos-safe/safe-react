const { removeWebpackPlugin, appendWebpackPlugin } = require('@rescripts/utilities')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = (config) => {
  config = removeWebpackPlugin('ESLintWebpackPlugin', config)
  config = appendWebpackPlugin(
    new FaviconsWebpackPlugin({
      // Your source logo (required)
      logo: `${__dirname}/../../public/resources/logo.svg`,
      // Enable caching and optionally specify the path to store cached data
      // Note: disabling caching may increase build times considerably
      cache: true,
      // Override the publicPath option usually read from webpack configuration
      // publicPath: './build/static',
      // The directory to output the assets relative to the webpack output dir.
      // Relative string paths are allowed here ie '../public/static'. If this
      // option is not set, `prefix` is used.
      // outputPath: '',
      // Prefix path for generated assets
      // prefix: '',
      // Inject html links/metadata (requires html-webpack-plugin).
      // This option accepts arguments of different types:
      //  * boolean
      //    `false`: disables injection
      //    `true`: enables injection if that is not disabled in html-webpack-plugin
      //  * function
      //    any predicate that takes an instance of html-webpack-plugin and returns either
      //    `true` or `false` to control the injection of html metadata for the html files
      //    generated by this instance.
      inject: true,
      favicons: {
        appName: 'Cronos Safe',
        mode: 'webapp',
        appDescription: 'Crypto.org Safe multi-signature wallet',
        background: '#ddd',
        theme_color: '#002D74',
        start_url: '/welcome',
        icons: {
          coast: false,
          yandex: false,
        },
      },
    }),
    config,
  )
  return config
}
