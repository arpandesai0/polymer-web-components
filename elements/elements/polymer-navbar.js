import { PolymerElement, html } from "@polymer/polymer";
import "@polymer/paper-header-panel/paper-header-panel.js";
import "@polymer/paper-toolbar/paper-toolbar.js";
import "./custom-anchor";
class PolymerNavbar extends PolymerElement {
  static get template() {
    return html`
      <style>
        div {
          display:flex;
          justify-content:space-around;
          z-index: 10;
          width:100%;
        }
      </style>
      <paper-toolbar>

        <div slot="top">
          <custom-anchor title="Create Observation" val="0" tab1="{{tab1}}" tab2="{{tab2}}" tab3="{{tab3}}"></custom-anchor><custom-anchor title="View Observations" val="1" tab1="{{tab1}}" tab2="{{tab2}}" tab3="{{tab3}}"></custom-anchor><custom-anchor title="Update Observation" val="2" tab1="{{tab1}}" tab2="{{tab2}}" tab3="{{tab3}}"></custom-anchor>
        </paper-toolbar>
        </div>
    `;
  }
  static get properties() {
    return {
      tab1: { type: Boolean, notify: true, reflectToAttribute: true },
      tab2: { type: Boolean, notify: true, reflectToAttribute: true },
      tab3: { type: Boolean, notify: true, reflectToAttribute: true },
    };
  }
}
customElements.define("polymer-navbar", PolymerNavbar);
