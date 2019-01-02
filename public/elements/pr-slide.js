import { render, html } from '/js/lit-html/lit-html.js'

let slideStyle = html`
<style>
:host {
	--that-color: #0f0;
}
.that {
	color: var(--that-color);
}
</style>
`;
let slideTemplate = html`${slideStyle} <div>This <span class="that">is a</span> slide --<slot></slot>--</div>`;

class PrSlide extends HTMLElement {
	constructor() {
		super();
		let shadowRoot = this.attachShadow({mode: 'open'});

		render(slideTemplate, this.shadowRoot);

		if (window.ShadyCSS) { window.ShadyCSS.styleElement(this); }
	}
}

window.customElements.define('pr-slide', PrSlide);
