import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Routes from "../routes";
import Header from "./components/header";

export default () => {
	return (
		<Fragment>
			<Header />
			<Switch>
				{Routes.map((c, index) => (
					<Route key={index} path={c.url} exact component={c.component} />
				))}
			</Switch>
		</Fragment>
	);
};
