module.exports = {
	// If you want to disable eslint-loader during production build, you can use the following config
	// lintOnSave: process.env.NODE_ENV !== "production"
	lintOnSave: true,
	// let the dev server proxy all API requests to the actual backend
	devServer: {
		proxy: {
			// proxy all requests starting with /v0 to https://api.hnpwa.com
			"/v0": {
				target: "https://api.hnpwa.com",
				changeOrigin: true,
				// filter: function(pathname, req) {
				// 	return pathname.match("^/api") && req.method === "GET";
				// },
			},
		},
	},
};
