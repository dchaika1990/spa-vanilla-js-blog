import AbstractView from "./AbstractView.js";

export default class PostView extends AbstractView {
	constructor(params) {
		super(params);
		this.setTitle('Viewing post');
	}

	async getHtml() {
		return `
			<h1>Post</h1>
            <p>
                You are viewing the post #${this.params.id}
            </p>
		`;
	}
}