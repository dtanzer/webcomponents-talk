import { render, html } from '/js/lit-html/lit-html.js'

let style = html`
<style>
</style>
`;

let template = html`
${style}
<div><slot></slot></div>
`;

class PrPresentation extends HTMLElement {
	constructor() {
		super();
		let shadowRoot = this.attachShadow({mode: 'open'});

		render(template, this.shadowRoot);
		this.currentSlide = 0;
		this.showSlide(this.currentSlide);
		
		if (window.ShadyCSS) { window.ShadyCSS.styleElement(this); }

		document.addEventListener('keypress', e => {
			if(e.key === 'PageDown' && this.currentSlide < this.children.length-1) {
				this.currentSlide++;
				this.showSlide(this.currentSlide);
			} else if(e.key === 'PageUp' && this.currentSlide > 0) {
				this.currentSlide--;
				this.showSlide(this.currentSlide);
			}
		});
	}

	showSlide(number) {
		for (let child of this.children) {
			child.style.display = 'none'
		};

		this.children[number].style.display = 'block';
	}
}

window.customElements.define('pr-presentation', PrPresentation);
