import { render, html } from '/lit-html/lit-html.js'

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
		this.currentSlide = parseInt(document.location.href.split("#")[1] || '0');
		this.showSlide(this.currentSlide);
		
		if (window.ShadyCSS) { window.ShadyCSS.styleElement(this); }

		document.body.addEventListener('keydown', e => {
			console.log(e);
			if((e.key === 'PageDown' || e.key === 'ArrowRight') && this.currentSlide < this.children.length-1) {
				if(this.children[this.currentSlide].next != null) {
					this.children[this.currentSlide].next();
				}
			} else if((e.key === 'PageUp' || e.key === 'ArrowLeft') && this.currentSlide > 0) {
				if(this.children[this.currentSlide].prev != null) {
					this.children[this.currentSlide].prev();
				}
			}
		});

		this.addEventListener('next-slide', e => {
			this.currentSlide++;
			this.showSlide(this.currentSlide);
		});
		this.addEventListener('prev-slide', e => {
			this.currentSlide--;
			this.showSlide(this.currentSlide);
		});
	}

	showSlide(number) {
		for (let child of this.children) {
			child.style.display = 'none'
		};

		this.children[number].style.display = '';
		history.pushState(null, null, '#'+number);
	}
}

window.customElements.define('pr-presentation', PrPresentation);
