import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/paper-button/paper-button.js";

class Button extends PolymerElement {
  static get template() {
    return html`<style>
        :host {
          align-self: center;
        }
        paper-button {
          color: white;
          background-color: #4054b4;
        }
      </style>
      <paper-button raised class="pink">Update Observations</paper-button> `;
  }
  toggle() {
    const data = {};
    if (this.isperson) data.person = this.person;
    if (this.isconcept) data.concept = this.concept;
    if (this.isdate) data.date = this.date;
    if (this.isvalue) data.value = this.value;
    console.log(data);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic YWRtaW46QWRtaW4xMjM=");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "JSESSIONID=56AEC369713B93BCB5B9BC7B34AA6E5F");

    var raw = JSON.stringify(data);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`/openmrs/ws/rest/v1/obs/${this.uuid}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  constructor() {
    super();
    this.addEventListener("click", this.toggle.bind(this));
  }
  static get properties() {
    return {
      isperson: { type: Boolean },
      isdate: { type: Boolean },
      isconcept: { type: Boolean },
      isvalue: { type: Boolean },
      uuid: { type: String },
      person: { type: String },
      date: { type: String },
      concept: { type: String },
      value: { type: Number },
    };
  }
}

customElements.define("custom-button-update", Button);
