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

		if (window.ShadyCSS) { window.ShadyCSS.styleElement(this); }
	}
}

window.customElements.define('pr-presentation', PrPresentation);
