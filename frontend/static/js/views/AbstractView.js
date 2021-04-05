export default class AbstractView{
	constructor(params) {
		this.params = params;
		this.posts = []
	}

	getPosts(){
		return this.posts;
	}

	setTitle(title) {
		document.title = title;
	}

	async getHtml() {
		return '';
	}
}