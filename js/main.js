

import About from './about' 

import React from "react" 

import Router from "react-router"

let {DefaultRoute, Route, Routes} = Router 

let routes = (
	<Route name="app" path="/" handler={About}>

	</Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler) {
	React.render(<Handler/>, document.body);
});
