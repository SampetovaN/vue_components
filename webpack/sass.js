module.exports = function() {
    return {
        module: {
            rules: [{
                test: /style\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',

                    {
                        loader: 'file-loader',
                        options: {sourceMap: true, name: '[name]'}
                    },
                    {
                        loader: 'postcss-loader',
                    }
                ]
            }]
        }
    }
};
