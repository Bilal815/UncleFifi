const express = require('express')
const app = express()
const port = 3000
const path = require("path")
const webpack = require("webpack");
const webpackConfig = require("./../webpack.config.js")
const compiler = webpack(webpackConfig)
const webpackDevMiddleware = require("webpack-dev-middleware")
const webpackHotMiddleware = require("webpack-hot-middleware")


// HMR
app.use(
    webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath
    })
)

// HMR
app.use(webpackHotMiddleware(compiler))

app.use(express.static("dist"))
app.get("/", (req, res) =>
    res.sendFile(path.resolve(__dirname, "./dist/index.html"))
);

// testing the following.
app.get("/authenticate", (req, res) =>
    res.send({authenticated: true})
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})