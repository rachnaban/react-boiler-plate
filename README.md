# Basic steps react-boiler-plate
1) npm init
2) npm install --save react react-dom prop-types
3) npm install --save-dev sass-loader node-sass
4) npm install --save-dev babel-preset-stage-1 if u intend to use arrow functions and add   "stage-1" to the presets array below.
5) npm install --save-dev babel-plugin-transform-class-properties if u want to transform class fields 
and then add plugins object to the babel entry below with "transform-class-properties"
6) npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react css-loader style-loader html-webpack-plugin webpack webpack-dev-server
7) update scripts section of package.json with "start": "webpack-dev-server --open" to run webpack server
8) update package.json for 
```
"babel": {
    "presets": [
      "env",
      "react"
    ]
  }
  ```
9) create .gitignore text file at root of your app to ignore node_modules and dist folder while pushing to github/clone
10) create app folder in root . create files index.html, index.css and index.js
11) create webpack.config.js file in root.
```
var path=require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
entry:'./app/index.js',
output:{
path: path.resolve(__dirname, 'dist'),
filename: 'index_bundle.js',
publicPath:'/'
},
module:{
rules:[
{test:/\.(js)$/, use:'babel-loader'},
{test:/\.(s?css)$/, use:['style-loader','css-loader','sass-loader']}
]
},
devServer:{
	historyApiFallback:true
},
plugins:[new HtmlWebpackPlugin({

	template:'app/index.html'
})]
}
```
12) For styling react:
npm install --save react-bootstrap and refer css below in index.html file.
```<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" ```
13) npm install --save normalize.css
refer require('normalize.css/normalize.css'); top of your index.js file.

