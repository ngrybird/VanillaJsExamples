class LazyImage extends HTMLElement {
  constructor(){
    super();
    this.template = document.createElement('template');
    this._value = this.getAttribute('value');
    this.template.innerHTML = `
      <div id="image"/>My Name is ${this._value}</div>
      <div>
        <input id = 'inputtag' value = ${this._value} >
      </div>
      `;
  }
  set value (val){
    this._value = val;
    console.log(this._value);
  }
  attributeChangedCallback(name, oldval, newval) {
    console.log(`the ${name} attribute has changed from ${oldval} to ${newval}!!`);
    // do something every time the attribute changes
  }
  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({mode: 'open'});
      this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }
    var inputTag = this.shadowRoot.querySelector('#inputtag');
    inputTag.addEventListener('change', (event) => { this.value = event.target.value });
  }
}

const register = () => customElements.define('lazy-image', LazyImage);
window.WebComponents ? window.WebComponents.waitFor(register) : register();