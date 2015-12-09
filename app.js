/**
 * Created by flybear on 15/10/20.
 */
var express = require("express");
var http = require("http");
var path = require("path");
var webpack = require("webpack");
var config = require("./webpack.dev.config.js");

var app = express(), server = http.createServer(app);
var compiler = webpack(config);

app.use(express.static(__dirname + "/demo"));

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "build/index.html"));
});


server.listen(3001, function () {
    console.info('Express server listening on port 3001.');
});