module.exports = ctx => ({
	map: ctx.env === "development" ? { inline: false } : false,
	plugins: {
		"postcss-import": {},
		"postcss-simple-vars": {},
		"postcss-preset-env": {
			stage: 0,
			features: { "color-mod-function": true }
		},
		"postcss-extend-rule": {},
		"postcss-discard-comments": {},
		"postcss-discard-empty": {},
		cssnano: ctx.env === "production" ? { preset: "default" } : false
	}
});
