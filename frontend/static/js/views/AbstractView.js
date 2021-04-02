export default class AbstractView{
	constructor(params) {

	}

	setTitle(title) {
		document.title = title;
	}

	async getHtml() {
		return '';
	}
}