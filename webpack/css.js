module.exports = function(paths) {
    return {
        module: {
            rules: [
                {
                    test: /style\.css$/,
                    include: paths,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                }
            ]
        }
    };
};
