import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/paper-radio-button/paper-radio-button.js";
import "../elements/polymer-input";
import "../elements/custom-button";
class CreateObservation extends PolymerElement {
  static get template() {
    return html`<style>
        .tab1 {
          padding: 2rem 3rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
      </style>
      <div class="tab1">
        <polymer-input label="Name" value="{{person}}"></polymer-input
        ><polymer-input label="Concept" value="{{concept}}"></polymer-input
        ><polymer-input
          label="Observation Date"
          value="{{date}}"
          type="date"
        ></polymer-input
        ><polymer-input
          label="Value"
          value="{{value}}"
          type="number"
        ></polymer-input
        ><custom-button
          label="Create User"
          person="{{person}}"
          value="{{value}}"
          concept="{{concept}}"
          date="{{date}}"
        ></custom-button>
      </div>`;
  }
  constructor() {
    super();
    this.person = "";
    this.date = "";
    this.concept = "";
    this.value = 0;
  }
  static get properties() {}
}
customElements.define("create-observation", CreateObservation);
