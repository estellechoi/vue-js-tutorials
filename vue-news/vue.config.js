module.exports = {
	// If you want to disable eslint-loader during production build, you can use the following config
	// lintOnSave: process.env.NODE_ENV !== "production"
	lintOnSave: true,
	// let the dev server proxy all API requests to the actual backend
	devServer: {
		proxy: {
			// proxy all requests starting with /api to https://api.hnpwa.com
			"/v0": {
				target: "http://api.hnpwa.com",
				changeOrigin: true,
				pathRewrite: {
					"^/v0": "",
				},
				// filter: function(pathname, req) {
				// 	return pathname.match("^/api") && req.method === "GET";
				// },
			},
		},
	},
};
