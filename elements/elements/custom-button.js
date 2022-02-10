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
      <paper-button raised class="pink">Create Task</paper-button> `;
  }
  toggle() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic YWRtaW46QWRtaW4xMjM=");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "JSESSIONID=56AEC369713B93BCB5B9BC7B34AA6E5F");
    console.log({
      person: this.person,
      concept: this.concept,
      obsDatetime: this.date,
      value: this.value,
    });
    var raw = JSON.stringify({
      person: this.person,
      concept: this.concept,
      obsDatetime: this.date,
      value: this.value,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://demo.openmrs.org/openmrs/ws/rest/v1/obs", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        alert("Created User");
      })
      .catch((error) => {
        console.log("error", error);
        alert(error.message);
      });
  }
  constructor() {
    super();
    this.addEventListener("click", this.toggle.bind(this));
  }
  static get properties() {
    return {
      label: { type: String },
      value: {
        type: String,
        notify: true,
        reflectToAttribute: true,
      },
      person: { type: String },
      description: { type: String },
      date: { type: String },
      value: { type: Number },
    };
  }
}

customElements.define("custom-button", Button);
