module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{png,html,js,json,css}'
	],
	swDest: 'public/javascript/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};