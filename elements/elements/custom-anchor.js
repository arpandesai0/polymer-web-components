import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/paper-button/paper-button.js";

class CustomAnchor extends PolymerElement {
  static get template() {
    return html`<style>
        paper-button {
          color: white;
          background-color: transparent;
          border-radius: 0;
        }
      </style>
      <paper-button>{{title}}</paper-button> `;
  }
  anchor() {
    if (this.val == "0") {
      this.tab1 = true;
      this.tab2 = false;
      this.tab3 = false;
    } else if (this.val == "1") {
      this.tab1 = false;
      this.tab2 = true;
      this.tab3 = false;
    } else if (this.val == "2") {
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = true;
    }
  }

  constructor() {
    super();
    this.addEventListener("click", this.anchor.bind(this));
  }
  static get properties() {
    return {
      title: { type: String },
      val: { type: String },
      tab1: { type: Boolean, notify: true, reflectToAttribute: true },
      tab2: { type: Boolean, notify: true, reflectToAttribute: true },
      tab3: { type: Boolean, notify: true, reflectToAttribute: true },
    };
  }
}

customElements.define("custom-anchor", CustomAnchor);
