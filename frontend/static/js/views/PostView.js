import AbstractView from "./AbstractView.js";

export default class PostView extends AbstractView {
	constructor(params) {
		super(params);
		this.setTitle('Viewing post');
	}

	getOptions(){
		return this.getPosts().find( post => post.id === +this.params.id )
	}

	async getHtml() {
		const title = this.getOptions().title ? this.getOptions().title : '';
		const content = this.getOptions().content ? this.getOptions().content : '';
		return `
			${title && `<h2>${this.getOptions().title}</h2>`}
			${content && `<div class="content">${this.getOptions().content}</div>`}
		`;
	}
}