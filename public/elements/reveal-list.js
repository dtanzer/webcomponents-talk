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

		if (window.ShadyCSS) { window.ShadyCSS.styleElement(this); }
	}
}

window.customElements.define('reveal-list', RevealList);
