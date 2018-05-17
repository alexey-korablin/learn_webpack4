const express = require('express');
const webpack = require('webpack');
const webpackDewMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config');
const compiler = webpack(config);

app.use(webpackDewMiddleware(compiler, {publicPath: config.output.publicPath}));

app.listen(3010, function() {
    console.log('Example app listening on port 3000!\n');
});