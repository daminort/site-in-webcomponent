import retargetEvents from 'react-shadow-dom-retarget-events';

const hostStyle = `
<style>
:host {
  display: block; /* by default, custom elements are display: inline */
  contain: content; /* CSS containment FTW. */
  position: relative;
}
</style>
`;

class WebPreview extends HTMLElement {

  static get observedAttributes() {
    return ['content'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    retargetEvents(this.shadowRoot);
  }

  updateContent() {
    const content = this.getAttribute('content');
    this.shadowRoot.innerHTML = `${hostStyle}${content}`;
  }

  connectedCallback() {
    this.updateContent();
  }

  attributeChangedCallback() {
    this.updateContent();
  }
}

customElements.define('web-preview', WebPreview);
