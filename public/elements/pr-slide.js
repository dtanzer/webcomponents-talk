import { render, html } from '/js/lit-html/lit-html.js'

let style = html`
<style>
	:host {
		display: block;
		margin: 1em 3em;
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

	next() {
		let nextCaptured = false;
		for (let child of this.children) {
			if(child.next != null && child.next()) {
				nextCaptured = true;
				break;
			}
		}

		if(!nextCaptured) {
			const nextSlideEvent = new CustomEvent("next-slide", {
				bubbles: true,
				cancelable: false,
				detail: {
					'my': 'detail',
				},
			});
			this.dispatchEvent(nextSlideEvent);
		}
	}
	prev() {
		let prevCaptured = false;
		for (let child of this.children) {
			if(child.prev != null && child.prev()) {
				prevCaptured = true;
				break;
			}
		}

		if(!prevCaptured) {
			const prevSlideEvent = new CustomEvent("prev-slide", {
				bubbles: true,
				cancelable: false,
			});
			this.dispatchEvent(prevSlideEvent);
		}
	}}

window.customElements.define('pr-slide', PrSlide);
