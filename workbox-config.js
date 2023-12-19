module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,html,js,css,png,jpg,jpeg,gif,webp}',  // Include all file types except .map
		'bootstrap-5.3.2-dist/**/*.{css,js}',             // Include Bootstrap files
		'static/**/*.{js,css}',                          // Include static files
		'workbox-1f73f963.js',                           // Include Workbox file
		'manifest.json',                                 // Include manifest file
		'robots.txt',                                    // Include robots.txt file
	],
	swDest: 'build/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
};