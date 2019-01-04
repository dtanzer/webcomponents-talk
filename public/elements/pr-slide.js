import { render, html } from '/js/lit-html/lit-html.js'

let style = html`
<style>
	:host {
		display: block;
	}
</style>
`;

let template = html`
${style}
<div><slot></slot></div>
`;

class PrSlide extends HTMLElement {
	constructor() {
		super();
		let shadowRoot = this.attachShadow({mode: 'open'});

		render(template, this.shadowRoot);

		if (window.ShadyCSS) { window.ShadyCSS.styleElement(this); }
	}
}

window.customElements.define('pr-slide', PrSlide);
