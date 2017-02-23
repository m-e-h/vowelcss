
var postcss = require('postcss')

module.exports = {
  use: [
		'autoprefixer',
		'postcss-import',
		'postcss-custom-media',
		'postcss-custom-properties',
		'postcss-strip-units',
		'postcss-mixins',
		'postcss-simple-vars',
		'postcss-color-function',
		'postcss-nested',
		'postcss-discard-comments',
		'postcss-discard-empty',
		'stylefmt'
	],
	input: 'vowel.css',
	dir: 'dist'
}
