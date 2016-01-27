# webpack-learn

http://webpack.github.io/docs/tutorials/getting-started/ 

npm install webpack -g

npm install css-loader style-loader 

require("!style!css!./style.css");

webpack ./entry.js bundle.js --module-bind 'css=style!css' 

webpack --progress --colors

webpack --progress --colors --watch

npm install webpack-dev-server -g

webpack-dev-server --progress --colors


This binds a small express server on localhost:8080 which serves your static assets as well as the bundle (compiled automatically). It automatically updates the browser page when a bundle is recompiled (SockJS). Open http://localhost:8080/webpack-dev-server/bundle in your browser.


