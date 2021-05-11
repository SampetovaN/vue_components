module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/',
    devServer: {
        overlay: {
            warnings: false,
            errors: true
        }
    },
    chainWebpack: config => {
        config.module
            .rule("eslint")
            .use("eslint-loader")
            .options({
                fix: true
            });
        config.optimization.minimize(true);
    }
};
