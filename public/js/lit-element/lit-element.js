import { html, svg, render, TemplateResult } from '../lit-html/lit-html.js';
import { LitLite, camelCaseToKebab } from './lit-lite.js';
export const LitElement = (superclass = HTMLElement) => LitLite(superclass, render);
export { html, svg, TemplateResult };
export { camelCaseToKebab };
//# sourceMappingURL=lit-element.js.map