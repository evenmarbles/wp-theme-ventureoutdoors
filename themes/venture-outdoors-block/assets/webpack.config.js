const path = require( 'path' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const CssMinimizerPlugin = require( 'css-minimizer-webpack-plugin' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
const TerserWebpackPlugin = require( 'terser-webpack-plugin' );
const CopyPlugin = require('copy-webpack-plugin'); // https://webpack.js.org/plugins/copy-webpack-plugin/
const DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");

const JS_DIR = path.resolve( __dirname, 'src/js' );
const IMG_DIR = path.resolve( __dirname, 'src/images/' );
const LIB_DIR = path.resolve( __dirname, 'src/library' );
const BUILD_DIR = path.resolve( __dirname, 'build' );

const entry = {
  'main': JS_DIR + '/main.js',
  'single': JS_DIR + '/single.js',
  'single-activity': JS_DIR + '/single-activity.js',
  'archive-activity': JS_DIR + '/archive-activity.js',
  'single-activity-type': JS_DIR + '/single-activity-type.js',
  'page': JS_DIR + '/page.js',
  'page-contact': JS_DIR + '/page-contact.js',
  'frontpage': JS_DIR + '/frontpage.js',
  '404': JS_DIR + '/404.js',
  'editor': JS_DIR + '/editor.js',
  'blocks': JS_DIR + '/blocks.js',
};
const output = {
  path: BUILD_DIR,
  filename: 'js/[name].js',
};

/**
 * Note: argv.mode will return 'development' or 'production'.
 */
 const plugins = ( argv ) => [
  new CleanWebpackPlugin({
    // Automatically remove all unused webpack assets on rebuild, when set to true in 
    // production. ( https://www.npmjs.com/package/clean-webpack-plugin#options-and-defaults-optional )
    cleanStaleWebpackAssets: ( 'production' === argv.mode )
  }),

  // new HtmlWebpackPlugin({
  //   template: path.resolve( __dirname, '..' ) + '/template/frontpage.html',
  //   filename: '/html/[name].php',
  //   inject: true,
  // }),

  new MiniCssExtractPlugin({
    filename: 'css/[name].css'
  }),

  new CopyPlugin({
    patterns: [
      { from: LIB_DIR, to: BUILD_DIR + '/library' }
    ]
  }),

  new DependencyExtractionWebpackPlugin({
    injectPolyfill: true,
    combineAssets: true,
  }),

  // new HtmlCriticalWebpackPlugin({
  //   src: 'https://venture-outdoors-classic.local/activities',
  //   dest: BUILD_DIR + '/css/archive-activity-critical.css'
  // }),

  // new HtmlCriticalWebpackPlugin({
  //   src: 'https://venture-outdoors-classic.local/',
  //   dest: BUILD_DIR + '/css/frontpage-critical.css'
  // }),

  // new HtmlCriticalWebpackPlugin({
  //   src: 'https://venture-outdoors-classic.local/contact',
  //   dest: BUILD_DIR + '/css/page-contact-critical.css'
  // }),

  // new HtmlCriticalWebpackPlugin({
  //   src: 'https://venture-outdoors-classic.local/about',
  //   dest: BUILD_DIR + '/css/page-critical.css'
  // }),
    
  // new HtmlCriticalWebpackPlugin({
  //   src: 'https://venture-outdoors-classic.local/activity-types/day-kayak-tours/',
  //   dest: BUILD_DIR + '/css/single-activity-type-critical.css'
  // }),

  // new HtmlCriticalWebpackPlugin({
  //   src: 'https://venture-outdoors-classic.local/activities/manatee-discovery-tour/',
  //   dest: BUILD_DIR + '/css/single-activity-critical.css'
  // }),

];

const rules = [
  {
    test: /\.js$/,
    include: [ JS_DIR ],
    exclude: /node_modules/,
    use: 'babel-loader'
  },
  {
    test: /\.scss$/,
    exclude: /node_modules/,
    use: [
      MiniCssExtractPlugin.loader ,
      'css-loader',
      'sass-loader'
    ]
  },
  {
    test: /\.(png|jpg|svg|jpeg|gif|ico)$/,
    type: 'asset/resource',
    generator: {
      filename: '[path][name].[ext]',
      publicPath: 'production' === process.env.NODE_ENV ? '../' : '../../'
    }
  },
  {
		test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
		exclude: [ IMG_DIR, /node_modules/ ],
    type: 'asset/resource',
    generator: {
      filename: '[path][name].[ext]',
      publicPath: 'production' === process.env.NODE_ENV ? '../' : '../../'
    }
	}
];

/**
 * Since you may have to disambiguate in your webpack.config.js between development and production builds,
 * you can export a function from your webpack configuration instead of exporting an object
 *
 * @param {string} env environment ( See the environment options CLI documentation for syntax examples. https://webpack.js.org/api/cli/#environment-options )
 * @param argv options map ( This describes the options passed to webpack, with keys such as output-filename and optimize-minimize )
 * @return {{output: *, devtool: string, entry: *, optimization: {minimizer: [*, *]}, plugins: *, module: {rules: *}, externals: {jquery: string}}}
 *
 * @see https://webpack.js.org/configuration/configuration-types/#exporting-a-function
 */
 module.exports = ( env, argv ) => ({
  entry: entry,

  output: output,

  /**
	 * A full SourceMap is emitted as a separate file ( e.g.  main.js.map )
	 * It adds a reference comment to the bundle so development tools know where to find it.
	 * set this to false if you don't need it
	 */
  devtool: 'source-map',

  module: {
    rules: rules,
  },

  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserWebpackPlugin()
    ]
  },

  plugins: plugins( argv ),

  externals: {
    jquery: 'jQuery'
  },

  stats: {
    errorDetails: true
  }
});