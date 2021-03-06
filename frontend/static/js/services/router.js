import Dashboard from "../views/Dashboard.js";
import Posts from "../views/Posts.js";
import PostView from "../views/PostView.js";
import Settings from "../views/Settings.js";

const router = async () => {
	const routes = [
		{path: "/", view: Dashboard},
		{path: "/posts", view: Posts},
		{path: "/posts/:id", view: PostView},
		{path: "/settings", view: Settings}
	]

	const _pathToRegex = path => new RegExp('^' + path
		.replace(/\//g, '\\/')
		.replace(/:\w+/g, '(.+)') + '$');

	const getParams = match => {
		const values = match.result.slice(1);
		const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

		return Object.fromEntries(keys.map( (key, i) => [key, values[i]] ));
	}

	// Test each route for potential match
	const potentialMatches = routes.map( route => {
		return {
			route,
			result: location.pathname.match(_pathToRegex(route.path))
		}
	} )

	let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null )

	if (!match) {
		match = {
			route: routes[0],
			result: [location.pathname]
		}
	}

	let view = new match.route.view(getParams(match));
	document.querySelector('#app').innerHTML = await view.getHtml();
}

export default router;