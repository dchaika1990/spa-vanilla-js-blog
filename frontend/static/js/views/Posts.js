import AbstractView from "./AbstractView.js";

export default class Posts extends AbstractView {
	constructor(params) {
		super(params);
		this.setTitle('Posts');
	}

	async getHtml() {
		return `
			<h1>Posts</h1>
            <p>
                You are viewing the posts
            </p>
             <p> <a href="/posts/1" data-link>Post 1</a>.</p>
             <p> <a href="/posts/2" data-link>Post 2</a>.</p>
		`;
	}
}