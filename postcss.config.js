var pcSpec = require('postcss-increase-specificity');

module.exports = () => ({
  plugins: {
	'autoprefixer': {},
	'postcss-import': {},
	'postcss-custom-media': {},
	'postcss-custom-properties': {},
	'postcss-strip-units': {},
	'postcss-mixins': {},
	'postcss-simple-vars': {},
	'postcss-color-function': {},
	'postcss-nested': {},
	'postcss-discard-comments': {},
	'postcss-discard-empty': {},
	'postcss-plugin-context': { pcSpec: pcSpec({ repeat: 1 }) },
	'stylefmt': {}
  }
});
