import AbstractView from "./AbstractView.js";

export default class Posts extends AbstractView {
	constructor(params) {
		super(params);
		this.setTitle('Posts');
	}

	async getHtml() {
		const postsList = this.getPosts().map(({id,title}) => {
			return ` <p> <a href="/posts/${id}" data-link>${title}</a>.</p>`
		} )

		return `
			<h1>Posts</h1>
             ${postsList.length ? postsList.join('') : `<p>There are no posts</p>`}
		`;
	}
}