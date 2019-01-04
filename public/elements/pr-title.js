import { render, html } from '/js/lit-html/lit-html.js'

let style = html`
<style>
::slotted(.subtitle) {
	font-size: 75%;
}
.title-content {
	text-align: center;
}
.title-content h1 {
	font-size: 400%;

	display: inline-block;
	text-align: left;
	margin: 0 auto;
}
</style>
`;

let template = html`
${style}
<div class="title-content">
	<h1><slot></slot></h1>
</div>
`;

class PrTitle extends HTMLElement {
	constructor() {
		super();
		let shadowRoot = this.attachShadow({mode: 'open'});

		render(template, this.shadowRoot);

		if (window.ShadyCSS) { window.ShadyCSS.styleElement(this); }
	}
}

window.customElements.define('pr-title', PrTitle);
