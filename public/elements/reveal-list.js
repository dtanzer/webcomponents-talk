import { render, html } from '/js/lit-html/lit-html.js'

let style = html`
<style>
</style>
`;

let template = html`
${style}
<ul><slot></slot></ul>
`;

class RevealList extends HTMLElement {
	constructor() {
		super();
		let shadowRoot = this.attachShadow({mode: 'open'});

		render(template, this.shadowRoot);
		this.childrenShown = 0;
		this.showChildren(this.childrenShown);

		if (window.ShadyCSS) { window.ShadyCSS.styleElement(this); }
	}

	showChildren(number) {
		for (let i=0; i<this.children.length; i++) {
			if(i<number) {
				this.children[i].style.display = '';
			} else {
				this.children[i].style.display = 'none';
			}
		};
	}

	next() {
		if(this.childrenShown === this.children.length) {
			return false;
		}

		this.childrenShown++;
		this.showChildren(this.childrenShown);
		return true;
	}

	prev() {
		if(this.childrenShown === 0) {
			return false;
		}
		
		this.childrenShown--;
		this.showChildren(this.childrenShown);
		return true;
	}
}

window.customElements.define('reveal-list', RevealList);
