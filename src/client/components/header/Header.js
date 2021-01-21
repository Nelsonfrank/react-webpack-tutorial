import React, { Fragment } from "react";
import { MenuLinks } from "../../../routes";
import { Link } from "react-router-dom";

export default () => {
	return (
		<Fragment>
			{MenuLinks.map((menu, index) => (
				<Link to={menu.url} style={{ marginRight: 20 }}>
					{menu.menuText}
				</Link>
			))}
		</Fragment>
	);
};
