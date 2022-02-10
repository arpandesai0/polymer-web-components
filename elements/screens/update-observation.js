import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/paper-radio-button/paper-radio-button.js";
import "../elements/polymer-input";
import "../elements/custom-button-update";
import "@polymer/paper-button/paper-button.js";
class UpdateObservation extends PolymerElement {
  static get template() {
    return html`<style>
        :host {
          font-family: Roboto;
        }
        .tab3 {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 2rem 1rem;
        }
        .fields {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .fields div {
          align-self: center;
          background-color: rgb(64, 84, 180, 0.15);
          width: 75%;
          border-radius: 1rem;
          padding: 1rem;
        }

        paper-button {
          align-self: center;
          background-color: #4054b4;
          width: max-content;
        }
      </style>
      <div class="tab3">
        <polymer-input
          label="Enter UUID"
          value="{{uuid}}"
          type="text"
        ></polymer-input>
        <p>Select fields to change (Only selected field will change):</p>
        <div class="fields">
          <div>
            <paper-radio-button checked="{{isperson}}"
              >Person</paper-radio-button
            >
            <polymer-input
              label="Enter Person"
              value="{{person}}"
              type="text"
              disabled="{{!isperson}}"
            ></polymer-input>
          </div>
          <div>
            <paper-radio-button checked="{{isconcept}}"
              >Concept</paper-radio-button
            ><polymer-input
              label="Updated Concept"
              value="{{concept}}"
              type="text"
              disabled="{{!isconcept}}"
            ></polymer-input>
          </div>
          <div>
            <paper-radio-button checked="{{isdate}}"
              >Observation Date</paper-radio-button
            ><polymer-input
              label="Updated Date"
              value="{{date}}"
              type="date"
              disabled="{{!isdate}}"
            ></polymer-input>
          </div>
          <div>
            <paper-radio-button checked="{{isvalue}}">Value</paper-radio-button
            ><polymer-input
              label="Updated Value"
              value="{{value}}"
              type="number"
              disabled="{{!isvalue}}"
            ></polymer-input>
          </div>
        </div>
        <custom-button-update
          uuid="{{uuid}}"
          isperson="{{isperson}}"
          isdate="{{isdate}}"
          isconcept="{{isconcept}}"
          isvalue="{{isvalue}}"
          person="{{person}}"
          date="{{date}}"
          concept="{{concept}}"
          value="{{value}}"
          >Update</custom-button-update
        >
      </div>`;
  }

  constructor() {
    super();
    this.isperson = false;
    this.isdate = false;
    this.isconcept = false;
    this.isvalue = false;
    this.uuid = "";
    this.person = "";
    this.date = "";
    this.concept = "";
    this.value = 0;
  }
  static get properties() {}
}
customElements.define("update-observation", UpdateObservation);
