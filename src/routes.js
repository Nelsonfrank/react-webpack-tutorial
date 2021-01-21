import Home from "./client/pages/home";
import About from "./client/pages/about";
// import NotFound from "./client/pages/not-found/not-found";

const Routes = [
	{
		url: "/",
		exact: true,
		component: Home,
	},
	{
		url: "/about",
		exact: false,
		component: About,
	},
	// {
	// 	url: "*",
	// 	exact: true,
	// 	component: NotFound,
	// },
];
export const MenuLinks = [
	{
		url: "/",
		menuText: "Home",
	},
	{
		url: "/about",
		menuText: "About",
	},
];
export default Routes;
