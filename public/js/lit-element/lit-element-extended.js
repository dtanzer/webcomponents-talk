import { svg, TemplateResult } from '../lit-html/lit-html.js';
import { html, render } from '../lit-html/lib/lit-extended.js';
import { LitLite, camelCaseToKebab } from './lit-lite.js';
export const LitElementExtended = (superclass = HTMLElement) => LitLite(superclass, render);
export { html, svg, TemplateResult };
export { camelCaseToKebab };
//# sourceMappingURL=lit-element-extended.js.map