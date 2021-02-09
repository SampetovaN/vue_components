var ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
module.exports = function () {
    return {
        plugins: [
            new ImageMinimizerPlugin({
                minimizerOptions: {
                    plugins: [
                        ['jpegtran', { progressive: true }],
                        ['optipng', { optimizationLevel: 5 }],
                        [
                            'svgo',
                            {
                                plugins: [
                                    {
                                        removeViewBox: false,
                                    },
                                ],
                            },
                        ],
                    ],
                },
            })
        ],
    };
};
