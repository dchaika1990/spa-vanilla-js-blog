import router from "./services/router.js";

const app = () => {
	const navigateTo = url => {
		history.pushState(null, null, url);
		router();
	}

	window.addEventListener('popstate', router);

	document.body.addEventListener('click', e => {
		if (e.target.matches('[data-link]')) {
			e.preventDefault();
			navigateTo(e.target.href);
		}
	})
	router();
}

export default app;