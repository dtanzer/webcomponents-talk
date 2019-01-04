import { render, html } from '/lit-html/lit-html.js'

let style = html`
<style>
</style>
`;

let template = html`
${style}
<slot></slot>
`;

class PrReveal extends HTMLElement {
	constructor() {
		super();
		let shadowRoot = this.attachShadow({mode: 'open'});

		render(template, this.shadowRoot);
		this.childrenShown = false;
		this.showChildren(this.childrenShown);

		if (window.ShadyCSS) { window.ShadyCSS.styleElement(this); }
	}

	showChildren(shouldShow) {
		for (let i=0; i<this.children.length; i++) {
			if(shouldShow) {
				this.children[i].style.display = '';
			} else {
				this.children[i].style.display = 'none';
			}
		};
	}

	next() {
		if(this.childrenShown) {
			return false;
		}

		this.childrenShown = true;
		this.showChildren(this.childrenShown);
		return true;
	}

	prev() {
		if(!this.childrenShown) {
			return false;
		}
		
		this.childrenShown = false;
		this.showChildren(this.childrenShown);
		return true;
	}
}

window.customElements.define('pr-reveal', PrReveal);
