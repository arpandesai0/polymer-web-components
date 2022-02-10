import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/font-roboto/roboto.js";
import "./elements/custom-button";
import "./elements/polymer-input";
import "./elements/polymer-navbar";
import "./screens/create-observation";
import "./screens/view-observation";
import "./screens/update-observation";

class HomeElement extends PolymerElement {
  static get template() {
    return html`<style>
        :host {
          display: flex;
          flex-direction: column;

          background-color: #f8f8ff;
        }
      </style>
      <polymer-navbar
        tab1="{{tab1}}"
        tab2="{{tab2}}"
        tab3="{{tab3}}"
      ></polymer-navbar>
      <template is="dom-if" if="[[ tab1]]">
        <create-observation></create-observation>
      </template>
      <template is="dom-if" if="[[ tab2]]">
        <view-observation></view-observation>
      </template>
      <template is="dom-if" if="[[ tab3]]">
        <update-observation></update-observation>
      </template>`;
  }
  constructor() {
    super();
    this.person = "";
    this.date = "";
    this.concept = "";
    this.value = 0;
    this.tab1 = true;
    this.tab2 = false;
    this.tab3 = false;
  }
  static get properties() {}
}
customElements.define("home-element", HomeElement);
