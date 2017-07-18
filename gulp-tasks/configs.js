'use strict';

var soursePath = './source/'
	, buildPath = './build/'
	, dirs = {
		'source': {
			'images': soursePath + 'images/**/*.*'
			, 'sass': [soursePath + 'sass/**/*.{sass,scss}', soursePath + 'elements/**/*.{sass,scss}']
			, 'fonts': soursePath + 'fonts/**/*.*'
			, 'js': soursePath + 'js/**/*.*'
			, 'pug': soursePath + 'pages/**/*.pug'
			, 'elements': soursePath + 'elements/**/*.*'
			, 'copy_to_build': soursePath + 'copy_to_build/**/*.*'
			, 'favicon': soursePath + 'favicon/**/*.*'
			, 'helpers': soursePath + 'helpers/'
			, 'fontsFolder': soursePath + 'fonts/'
			, 'svgFontsAssets': soursePath + 'svg-font-assets/*.svg'
			, 'sassFolder': soursePath + 'sass/'
		}
		, 'build': {
			'images': buildPath + 'images/'
			, 'css': '../astoundcommerce-website/wp-content/themes/salient'
			, 'fonts': '../astoundcommerce-website/wp-content/themes/salient/css/fonts'
			, 'vendorJs': '../wp-content/themes/salient/js'
			, 'vendorCss':  buildPath + 'css/vendor/'
			, 'js': buildPath + 'js/'
			, 'favicon': buildPath
		}
	}
	, environment = 'dev';

module.exports = dirs;
module.exports.environment = environment;
module.exports.soursePath = soursePath;
module.exports.buildPath = buildPath;
