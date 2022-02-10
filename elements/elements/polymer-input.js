import { PolymerElement, html } from "@polymer/polymer";
import "@polymer/paper-input/paper-input.js";

class PolymerInput extends PolymerElement {
  static get template() {
    return html`
      <paper-input
        always-float-label
        value="{{value}}"
        label="{{label}}"
        type="{{type}}"
        disabled="{{disabled}}"
      ></paper-input>
    `;
  }

  constructor() {
    super();
  }
  static get properties() {
    return {
      label: { type: String },
      value: {
        type: String,
        notify: true,
        reflectToAttribute: true,
      },
      type: {
        type: String,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    };
  }
}
customElements.define("polymer-input", PolymerInput);
