# webpack-learn

http://webpack.github.io/docs/tutorials/getting-started/ 

npm install webpack -g

npm install css-loader style-loader 
npm install stylus-loader --save-dev
npm install react@0.13.3 --save-dev
npm install react-router@0.13.3 --save-dev
npm install babel-loader babel-core babel-preset-es2015 babel-preset-react --save-dev 
npm i jshint@^2.5.0 --save-dev
npm i jsxhint-loader --save-dev

#custom  config file
webpack —config webpack.custom.config.js

require("!style!css!./style.css");

webpack ./entry.js bundle.js --module-bind 'css=style!css' 

webpack --progress --colors

webpack --progress --colors --watch

npm install webpack-dev-server -g

webpack-dev-server --progress --colors


This binds a small express server on localhost:8080 which serves your static assets as well as the bundle (compiled automatically). It automatically updates the browser page when a bundle is recompiled (SockJS). Open http://localhost:8080/webpack-dev-server/bundle in your browser.


