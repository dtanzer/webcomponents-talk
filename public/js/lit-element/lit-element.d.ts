import { html, svg, TemplateResult } from '../lit-html/lit-html.js';
import { HTMLCollectionByID, Data, PropConfig, Properties, camelCaseToKebab, MethodsToCall } from './lit-lite.js';
export declare const LitElement: (superclass?: {
    new (): HTMLElement;
    prototype: HTMLElement;
}) => {
    new (): {
        [key: string]: any;
        __renderCallbacks: Set<any>;
        __pendingRender: boolean;
        __data: Data;
        __methodsToCall: MethodsToCall;
        __wait: any;
        __firstRender: boolean;
        afterRender?: (isFirst: boolean) => void;
        shadowRoot: ShadowRoot;
        __propAttr: Map<string, string>;
        __attrProp: Map<string, string>;
        connectedCallback(): void;
        disconnectedCallback(): void;
        __makeGetterSetter(prop: string, info: PropConfig): void;
        __propertiesChanged(prop: string, newVal: any): void;
        setProperty(prop: string, newVal?: any): void;
        attributeChangedCallback(attr: string, old: any, val: any): void;
        postponedRender(): void;
        refresh(callback?: () => any): Promise<void>;
        render(data?: object): TemplateResult;
        readonly $: HTMLCollectionByID;
        accessKey: string;
        contentEditable: string;
        readonly dataset: DOMStringMap;
        dir: string;
        draggable: boolean;
        hidden: boolean;
        hideFocus: boolean;
        innerText: string;
        readonly isContentEditable: boolean;
        lang: string;
        readonly offsetHeight: number;
        readonly offsetLeft: number;
        readonly offsetParent: Element;
        readonly offsetTop: number;
        readonly offsetWidth: number;
        onabort: (this: HTMLElement, ev: UIEvent) => any;
        onactivate: (this: HTMLElement, ev: Event) => any;
        onbeforeactivate: (this: HTMLElement, ev: Event) => any;
        onbeforecopy: (this: HTMLElement, ev: Event) => any;
        onbeforecut: (this: HTMLElement, ev: Event) => any;
        onbeforedeactivate: (this: HTMLElement, ev: Event) => any;
        onbeforepaste: (this: HTMLElement, ev: Event) => any;
        onblur: (this: HTMLElement, ev: FocusEvent) => any;
        oncanplay: (this: HTMLElement, ev: Event) => any;
        oncanplaythrough: (this: HTMLElement, ev: Event) => any;
        onchange: (this: HTMLElement, ev: Event) => any;
        onclick: (this: HTMLElement, ev: MouseEvent) => any;
        oncontextmenu: (this: HTMLElement, ev: PointerEvent) => any;
        oncopy: (this: HTMLElement, ev: ClipboardEvent) => any;
        oncuechange: (this: HTMLElement, ev: Event) => any;
        oncut: (this: HTMLElement, ev: ClipboardEvent) => any;
        ondblclick: (this: HTMLElement, ev: MouseEvent) => any;
        ondeactivate: (this: HTMLElement, ev: Event) => any;
        ondrag: (this: HTMLElement, ev: DragEvent) => any;
        ondragend: (this: HTMLElement, ev: DragEvent) => any;
        ondragenter: (this: HTMLElement, ev: DragEvent) => any;
        ondragleave: (this: HTMLElement, ev: DragEvent) => any;
        ondragover: (this: HTMLElement, ev: DragEvent) => any;
        ondragstart: (this: HTMLElement, ev: DragEvent) => any;
        ondrop: (this: HTMLElement, ev: DragEvent) => any;
        ondurationchange: (this: HTMLElement, ev: Event) => any;
        onemptied: (this: HTMLElement, ev: Event) => any;
        onended: (this: HTMLElement, ev: Event) => any;
        onerror: (this: HTMLElement, ev: ErrorEvent) => any;
        onfocus: (this: HTMLElement, ev: FocusEvent) => any;
        oninput: (this: HTMLElement, ev: Event) => any;
        oninvalid: (this: HTMLElement, ev: Event) => any;
        onkeydown: (this: HTMLElement, ev: KeyboardEvent) => any;
        onkeypress: (this: HTMLElement, ev: KeyboardEvent) => any;
        onkeyup: (this: HTMLElement, ev: KeyboardEvent) => any;
        onload: (this: HTMLElement, ev: Event) => any;
        onloadeddata: (this: HTMLElement, ev: Event) => any;
        onloadedmetadata: (this: HTMLElement, ev: Event) => any;
        onloadstart: (this: HTMLElement, ev: Event) => any;
        onmousedown: (this: HTMLElement, ev: MouseEvent) => any;
        onmouseenter: (this: HTMLElement, ev: MouseEvent) => any;
        onmouseleave: (this: HTMLElement, ev: MouseEvent) => any;
        onmousemove: (this: HTMLElement, ev: MouseEvent) => any;
        onmouseout: (this: HTMLElement, ev: MouseEvent) => any;
        onmouseover: (this: HTMLElement, ev: MouseEvent) => any;
        onmouseup: (this: HTMLElement, ev: MouseEvent) => any;
        onmousewheel: (this: HTMLElement, ev: WheelEvent) => any;
        onmscontentzoom: (this: HTMLElement, ev: Event) => any;
        onmsmanipulationstatechanged: (this: HTMLElement, ev: Event) => any;
        onpaste: (this: HTMLElement, ev: ClipboardEvent) => any;
        onpause: (this: HTMLElement, ev: Event) => any;
        onplay: (this: HTMLElement, ev: Event) => any;
        onplaying: (this: HTMLElement, ev: Event) => any;
        onprogress: (this: HTMLElement, ev: ProgressEvent) => any;
        onratechange: (this: HTMLElement, ev: Event) => any;
        onreset: (this: HTMLElement, ev: Event) => any;
        onscroll: (this: HTMLElement, ev: UIEvent) => any;
        onseeked: (this: HTMLElement, ev: Event) => any;
        onseeking: (this: HTMLElement, ev: Event) => any;
        onselect: (this: HTMLElement, ev: UIEvent) => any;
        onselectstart: (this: HTMLElement, ev: Event) => any;
        onstalled: (this: HTMLElement, ev: Event) => any;
        onsubmit: (this: HTMLElement, ev: Event) => any;
        onsuspend: (this: HTMLElement, ev: Event) => any;
        ontimeupdate: (this: HTMLElement, ev: Event) => any;
        onvolumechange: (this: HTMLElement, ev: Event) => any;
        onwaiting: (this: HTMLElement, ev: Event) => any;
        outerText: string;
        spellcheck: boolean;
        tabIndex: number;
        title: string;
        animate(keyframes: AnimationKeyFrame | AnimationKeyFrame[], options: number | AnimationOptions): Animation;
        blur(): void;
        click(): void;
        dragDrop(): boolean;
        focus(): void;
        msGetInputContext(): MSInputMethodContext;
        addEventListener<K extends "waiting" | "error" | "abort" | "progress" | "ended" | "change" | "input" | "select" | "activate" | "beforeactivate" | "beforedeactivate" | "blur" | "canplay" | "canplaythrough" | "click" | "contextmenu" | "dblclick" | "deactivate" | "drag" | "dragend" | "dragenter" | "dragleave" | "dragover" | "dragstart" | "drop" | "durationchange" | "emptied" | "focus" | "invalid" | "keydown" | "keypress" | "keyup" | "load" | "loadeddata" | "loadedmetadata" | "loadstart" | "mousedown" | "mousemove" | "mouseout" | "mouseover" | "mouseup" | "mousewheel" | "MSContentZoom" | "MSGestureChange" | "MSGestureDoubleTap" | "MSGestureEnd" | "MSGestureHold" | "MSGestureStart" | "MSGestureTap" | "MSInertiaStart" | "MSManipulationStateChanged" | "MSPointerCancel" | "MSPointerDown" | "MSPointerEnter" | "MSPointerLeave" | "MSPointerMove" | "MSPointerOut" | "MSPointerOver" | "MSPointerUp" | "pause" | "play" | "playing" | "ratechange" | "reset" | "scroll" | "seeked" | "seeking" | "selectstart" | "stalled" | "submit" | "suspend" | "timeupdate" | "touchcancel" | "touchend" | "touchmove" | "touchstart" | "volumechange" | "webkitfullscreenchange" | "webkitfullscreenerror" | "pointercancel" | "pointerdown" | "pointerenter" | "pointerleave" | "pointermove" | "pointerout" | "pointerover" | "pointerup" | "wheel" | "ariarequest" | "command" | "gotpointercapture" | "lostpointercapture" | "MSGotPointerCapture" | "MSLostPointerCapture" | "beforecopy" | "beforecut" | "beforepaste" | "copy" | "cuechange" | "cut" | "mouseenter" | "mouseleave" | "paste">(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends "waiting" | "error" | "abort" | "progress" | "ended" | "change" | "input" | "select" | "activate" | "beforeactivate" | "beforedeactivate" | "blur" | "canplay" | "canplaythrough" | "click" | "contextmenu" | "dblclick" | "deactivate" | "drag" | "dragend" | "dragenter" | "dragleave" | "dragover" | "dragstart" | "drop" | "durationchange" | "emptied" | "focus" | "invalid" | "keydown" | "keypress" | "keyup" | "load" | "loadeddata" | "loadedmetadata" | "loadstart" | "mousedown" | "mousemove" | "mouseout" | "mouseover" | "mouseup" | "mousewheel" | "MSContentZoom" | "MSGestureChange" | "MSGestureDoubleTap" | "MSGestureEnd" | "MSGestureHold" | "MSGestureStart" | "MSGestureTap" | "MSInertiaStart" | "MSManipulationStateChanged" | "MSPointerCancel" | "MSPointerDown" | "MSPointerEnter" | "MSPointerLeave" | "MSPointerMove" | "MSPointerOut" | "MSPointerOver" | "MSPointerUp" | "pause" | "play" | "playing" | "ratechange" | "reset" | "scroll" | "seeked" | "seeking" | "selectstart" | "stalled" | "submit" | "suspend" | "timeupdate" | "touchcancel" | "touchend" | "touchmove" | "touchstart" | "volumechange" | "webkitfullscreenchange" | "webkitfullscreenerror" | "pointercancel" | "pointerdown" | "pointerenter" | "pointerleave" | "pointermove" | "pointerout" | "pointerover" | "pointerup" | "wheel" | "ariarequest" | "command" | "gotpointercapture" | "lostpointercapture" | "MSGotPointerCapture" | "MSLostPointerCapture" | "beforecopy" | "beforecut" | "beforepaste" | "copy" | "cuechange" | "cut" | "mouseenter" | "mouseleave" | "paste">(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
        readonly assignedSlot: HTMLSlotElement;
        readonly attributes: NamedNodeMap;
        readonly classList: DOMTokenList;
        className: string;
        readonly clientHeight: number;
        readonly clientLeft: number;
        readonly clientTop: number;
        readonly clientWidth: number;
        id: string;
        innerHTML: string;
        msContentZoomFactor: number;
        readonly msRegionOverflow: string;
        onariarequest: (this: Element, ev: Event) => any;
        oncommand: (this: Element, ev: Event) => any;
        ongotpointercapture: (this: Element, ev: PointerEvent) => any;
        onlostpointercapture: (this: Element, ev: PointerEvent) => any;
        onmsgesturechange: (this: Element, ev: Event) => any;
        onmsgesturedoubletap: (this: Element, ev: Event) => any;
        onmsgestureend: (this: Element, ev: Event) => any;
        onmsgesturehold: (this: Element, ev: Event) => any;
        onmsgesturestart: (this: Element, ev: Event) => any;
        onmsgesturetap: (this: Element, ev: Event) => any;
        onmsgotpointercapture: (this: Element, ev: Event) => any;
        onmsinertiastart: (this: Element, ev: Event) => any;
        onmslostpointercapture: (this: Element, ev: Event) => any;
        onmspointercancel: (this: Element, ev: Event) => any;
        onmspointerdown: (this: Element, ev: Event) => any;
        onmspointerenter: (this: Element, ev: Event) => any;
        onmspointerleave: (this: Element, ev: Event) => any;
        onmspointermove: (this: Element, ev: Event) => any;
        onmspointerout: (this: Element, ev: Event) => any;
        onmspointerover: (this: Element, ev: Event) => any;
        onmspointerup: (this: Element, ev: Event) => any;
        ontouchcancel: (this: Element, ev: TouchEvent) => any;
        ontouchend: (this: Element, ev: TouchEvent) => any;
        ontouchmove: (this: Element, ev: TouchEvent) => any;
        ontouchstart: (this: Element, ev: TouchEvent) => any;
        onwebkitfullscreenchange: (this: Element, ev: Event) => any;
        onwebkitfullscreenerror: (this: Element, ev: Event) => any;
        outerHTML: string;
        readonly prefix: string;
        readonly scrollHeight: number;
        scrollLeft: number;
        scrollTop: number;
        readonly scrollWidth: number;
        slot: string;
        readonly tagName: string;
        attachShadow(shadowRootInitDict: ShadowRootInit): ShadowRoot;
        closest<K extends "object" | "track" | "progress" | "a" | "abbr" | "acronym" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "center" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "dfn" | "dir" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "font" | "footer" | "form" | "frame" | "frameset" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "isindex" | "kbd" | "keygen" | "label" | "legend" | "li" | "link" | "listing" | "map" | "mark" | "marquee" | "menu" | "meta" | "meter" | "nav" | "nextid" | "nobr" | "noframes" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "plaintext" | "pre" | "q" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "slot" | "small" | "source" | "span" | "strike" | "strong" | "style" | "sub" | "sup" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "tt" | "u" | "ul" | "var" | "video" | "wbr" | "xmp">(selector: K): HTMLElementTagNameMap[K];
        closest<K extends "symbol" | "circle" | "defs" | "desc" | "ellipse" | "filter" | "g" | "image" | "line" | "marker" | "mask" | "path" | "metadata" | "pattern" | "polygon" | "polyline" | "rect" | "svg" | "stop" | "switch" | "tspan" | "text" | "use" | "view" | "clippath" | "feblend" | "fecolormatrix" | "fecomponenttransfer" | "fecomposite" | "feconvolvematrix" | "fediffuselighting" | "fedisplacementmap" | "fedistantlight" | "feflood" | "fefunca" | "fefuncb" | "fefuncg" | "fefuncr" | "fegaussianblur" | "feimage" | "femerge" | "femergenode" | "femorphology" | "feoffset" | "fepointlight" | "fespecularlighting" | "fespotlight" | "fetile" | "feturbulence" | "foreignobject" | "lineargradient" | "radialgradient" | "textpath">(selector: K): SVGElementTagNameMap[K];
        closest(selector: string): Element;
        getAttribute(qualifiedName: string): string;
        getAttributeNS(namespaceURI: string, localName: string): string;
        getAttributeNode(name: string): Attr;
        getAttributeNodeNS(namespaceURI: string, localName: string): Attr;
        getBoundingClientRect(): ClientRect | DOMRect;
        getClientRects(): ClientRectList | DOMRectList;
        getElementsByClassName(classNames: string): NodeListOf<Element>;
        getElementsByTagName<K extends "object" | "track" | "progress" | "a" | "abbr" | "acronym" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "center" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "dfn" | "dir" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "font" | "footer" | "form" | "frame" | "frameset" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "isindex" | "kbd" | "keygen" | "label" | "legend" | "li" | "link" | "listing" | "map" | "mark" | "marquee" | "menu" | "meta" | "meter" | "nav" | "nextid" | "nobr" | "noframes" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "plaintext" | "pre" | "q" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "slot" | "small" | "source" | "span" | "strike" | "strong" | "style" | "sub" | "sup" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "tt" | "u" | "ul" | "var" | "video" | "wbr" | "xmp">(name: K): NodeListOf<HTMLElementTagNameMap[K]>;
        getElementsByTagName<K extends "symbol" | "circle" | "defs" | "desc" | "ellipse" | "filter" | "g" | "image" | "line" | "marker" | "mask" | "path" | "metadata" | "pattern" | "polygon" | "polyline" | "rect" | "svg" | "stop" | "switch" | "tspan" | "text" | "use" | "view" | "clippath" | "feblend" | "fecolormatrix" | "fecomponenttransfer" | "fecomposite" | "feconvolvematrix" | "fediffuselighting" | "fedisplacementmap" | "fedistantlight" | "feflood" | "fefunca" | "fefuncb" | "fefuncg" | "fefuncr" | "fegaussianblur" | "feimage" | "femerge" | "femergenode" | "femorphology" | "feoffset" | "fepointlight" | "fespecularlighting" | "fespotlight" | "fetile" | "feturbulence" | "foreignobject" | "lineargradient" | "radialgradient" | "textpath">(name: K): NodeListOf<SVGElementTagNameMap[K]>;
        getElementsByTagName(name: string): NodeListOf<Element>;
        getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1999/xhtml", localName: string): HTMLCollectionOf<HTMLElement>;
        getElementsByTagNameNS(namespaceURI: "http://www.w3.org/2000/svg", localName: string): HTMLCollectionOf<SVGElement>;
        getElementsByTagNameNS(namespaceURI: string, localName: string): HTMLCollectionOf<Element>;
        hasAttribute(name: string): boolean;
        hasAttributeNS(namespaceURI: string, localName: string): boolean;
        hasAttributes(): boolean;
        insertAdjacentElement(position: InsertPosition, insertedElement: Element): Element;
        insertAdjacentHTML(where: InsertPosition, html: string): void;
        insertAdjacentText(where: InsertPosition, text: string): void;
        matches(selectors: string): boolean;
        msGetRegionContent(): any;
        msGetUntransformedBounds(): ClientRect;
        msMatchesSelector(selectors: string): boolean;
        msReleasePointerCapture(pointerId: number): void;
        msSetPointerCapture(pointerId: number): void;
        msZoomTo(args: MsZoomToOptions): void;
        releasePointerCapture(pointerId: number): void;
        removeAttribute(qualifiedName: string): void;
        removeAttributeNS(namespaceURI: string, localName: string): void;
        removeAttributeNode(oldAttr: Attr): Attr;
        requestFullscreen(): void;
        requestPointerLock(): void;
        scroll(options?: ScrollToOptions): void;
        scroll(x: number, y: number): void;
        scrollBy(options?: ScrollToOptions): void;
        scrollBy(x: number, y: number): void;
        scrollIntoView(arg?: boolean | ScrollIntoViewOptions): void;
        scrollTo(options?: ScrollToOptions): void;
        scrollTo(x: number, y: number): void;
        setAttribute(qualifiedName: string, value: string): void;
        setAttributeNS(namespaceURI: string, qualifiedName: string, value: string): void;
        setAttributeNode(newAttr: Attr): Attr;
        setAttributeNodeNS(newAttr: Attr): Attr;
        setPointerCapture(pointerId: number): void;
        webkitMatchesSelector(selectors: string): boolean;
        webkitRequestFullScreen(): void;
        webkitRequestFullscreen(): void;
        readonly baseURI: string;
        readonly childNodes: NodeListOf<Node & ChildNode>;
        readonly firstChild: Node;
        readonly isConnected: boolean;
        readonly lastChild: Node;
        readonly localName: string;
        readonly namespaceURI: string;
        readonly nextSibling: Node;
        readonly nodeName: string;
        readonly nodeType: number;
        nodeValue: string;
        readonly ownerDocument: Document;
        readonly parentElement: HTMLElement;
        readonly parentNode: Node;
        readonly previousSibling: Node;
        textContent: string;
        appendChild<T extends Node>(newChild: T): T;
        cloneNode(deep?: boolean): Node;
        compareDocumentPosition(other: Node): number;
        contains(child: Node): boolean;
        hasChildNodes(): boolean;
        insertBefore<T extends Node>(newChild: T, refChild: Node): T;
        isDefaultNamespace(namespaceURI: string): boolean;
        isEqualNode(arg: Node): boolean;
        isSameNode(other: Node): boolean;
        lookupNamespaceURI(prefix: string): string;
        lookupPrefix(namespaceURI: string): string;
        normalize(): void;
        removeChild<T extends Node>(oldChild: T): T;
        replaceChild<T extends Node>(newChild: Node, oldChild: T): T;
        readonly ATTRIBUTE_NODE: number;
        readonly CDATA_SECTION_NODE: number;
        readonly COMMENT_NODE: number;
        readonly DOCUMENT_FRAGMENT_NODE: number;
        readonly DOCUMENT_NODE: number;
        readonly DOCUMENT_POSITION_CONTAINED_BY: number;
        readonly DOCUMENT_POSITION_CONTAINS: number;
        readonly DOCUMENT_POSITION_DISCONNECTED: number;
        readonly DOCUMENT_POSITION_FOLLOWING: number;
        readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
        readonly DOCUMENT_POSITION_PRECEDING: number;
        readonly DOCUMENT_TYPE_NODE: number;
        readonly ELEMENT_NODE: number;
        readonly ENTITY_NODE: number;
        readonly ENTITY_REFERENCE_NODE: number;
        readonly NOTATION_NODE: number;
        readonly PROCESSING_INSTRUCTION_NODE: number;
        readonly TEXT_NODE: number;
        dispatchEvent(evt: Event): boolean;
        onpointercancel: (this: GlobalEventHandlers, ev: PointerEvent) => any;
        onpointerdown: (this: GlobalEventHandlers, ev: PointerEvent) => any;
        onpointerenter: (this: GlobalEventHandlers, ev: PointerEvent) => any;
        onpointerleave: (this: GlobalEventHandlers, ev: PointerEvent) => any;
        onpointermove: (this: GlobalEventHandlers, ev: PointerEvent) => any;
        onpointerout: (this: GlobalEventHandlers, ev: PointerEvent) => any;
        onpointerover: (this: GlobalEventHandlers, ev: PointerEvent) => any;
        onpointerup: (this: GlobalEventHandlers, ev: PointerEvent) => any;
        onwheel: (this: GlobalEventHandlers, ev: WheelEvent) => any;
        readonly childElementCount: number;
        readonly firstElementChild: Element;
        readonly lastElementChild: Element;
        readonly nextElementSibling: Element;
        readonly previousElementSibling: Element;
        readonly children: HTMLCollection;
        querySelector<K extends "object" | "track" | "progress" | "a" | "abbr" | "acronym" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "center" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "dfn" | "dir" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "font" | "footer" | "form" | "frame" | "frameset" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "isindex" | "kbd" | "keygen" | "label" | "legend" | "li" | "link" | "listing" | "map" | "mark" | "marquee" | "menu" | "meta" | "meter" | "nav" | "nextid" | "nobr" | "noframes" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "plaintext" | "pre" | "q" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "slot" | "small" | "source" | "span" | "strike" | "strong" | "style" | "sub" | "sup" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "tt" | "u" | "ul" | "var" | "video" | "wbr" | "xmp">(selectors: K): HTMLElementTagNameMap[K];
        querySelector<K extends "symbol" | "circle" | "defs" | "desc" | "ellipse" | "filter" | "g" | "image" | "line" | "marker" | "mask" | "path" | "metadata" | "pattern" | "polygon" | "polyline" | "rect" | "svg" | "stop" | "switch" | "tspan" | "text" | "use" | "view" | "clippath" | "feblend" | "fecolormatrix" | "fecomponenttransfer" | "fecomposite" | "feconvolvematrix" | "fediffuselighting" | "fedisplacementmap" | "fedistantlight" | "feflood" | "fefunca" | "fefuncb" | "fefuncg" | "fefuncr" | "fegaussianblur" | "feimage" | "femerge" | "femergenode" | "femorphology" | "feoffset" | "fepointlight" | "fespecularlighting" | "fespotlight" | "fetile" | "feturbulence" | "foreignobject" | "lineargradient" | "radialgradient" | "textpath">(selectors: K): SVGElementTagNameMap[K];
        querySelector<E extends Element = Element>(selectors: string): E;
        querySelectorAll<K extends "object" | "track" | "progress" | "a" | "abbr" | "acronym" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "center" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "dfn" | "dir" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "font" | "footer" | "form" | "frame" | "frameset" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "isindex" | "kbd" | "keygen" | "label" | "legend" | "li" | "link" | "listing" | "map" | "mark" | "marquee" | "menu" | "meta" | "meter" | "nav" | "nextid" | "nobr" | "noframes" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "plaintext" | "pre" | "q" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "slot" | "small" | "source" | "span" | "strike" | "strong" | "style" | "sub" | "sup" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "tt" | "u" | "ul" | "var" | "video" | "wbr" | "xmp">(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;
        querySelectorAll<K extends "symbol" | "circle" | "defs" | "desc" | "ellipse" | "filter" | "g" | "image" | "line" | "marker" | "mask" | "path" | "metadata" | "pattern" | "polygon" | "polyline" | "rect" | "svg" | "stop" | "switch" | "tspan" | "text" | "use" | "view" | "clippath" | "feblend" | "fecolormatrix" | "fecomponenttransfer" | "fecomposite" | "feconvolvematrix" | "fediffuselighting" | "fedisplacementmap" | "fedistantlight" | "feflood" | "fefunca" | "fefuncb" | "fefuncg" | "fefuncr" | "fegaussianblur" | "feimage" | "femerge" | "femergenode" | "femorphology" | "feoffset" | "fepointlight" | "fespecularlighting" | "fespotlight" | "fetile" | "feturbulence" | "foreignobject" | "lineargradient" | "radialgradient" | "textpath">(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;
        querySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E>;
        remove(): void;
        readonly style: CSSStyleDeclaration;
    };
    properties: Properties;
    readonly observedAttributes: string[];
};
export { html, svg, TemplateResult };
export { HTMLCollectionByID, Data, PropConfig, Properties, camelCaseToKebab };
