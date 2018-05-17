const path = require('path');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
           {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
           },
           {
               test: /\.(png|jpg|jpeg|svg|gif)$/,
               use: ['file-loader']
           },
           {
               test: /\.(woff|woff2|eot|ttf|otf)$/,
               use: ['file-loader']
           },
           {
               test: /\.(csv|tsv)$/,
               use: ['csv-loader']
           },
           {
               test: /\.xml$/,
               use: ['xml-loader']
           }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};