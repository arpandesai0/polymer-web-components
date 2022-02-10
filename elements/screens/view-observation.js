import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/paper-spinner/paper-spinner.js";
import "@polymer/font-roboto/roboto.js";
class ViewObservation extends PolymerElement {
  static get template() {
    return html`<style>
        .tab2 {
          display: flex;
          flex-direction: column;
          font-family: Roboto;
          gap: 1rem;
          padding: 0rem 3rem;
        }
        paper-spinner {
          align-self: center;
        }
        .card {
          background-color: #4054b4;
          padding: 1rem;
          border-radius: 1rem;
          color: white;
        }
        .card .title {
          font-weight: 500;
        }
        .card .value {
          font-size: 1.25rem;
        }
      </style>
      <div class="tab2">
        <paper-spinner active="{{loader}}"></paper-spinner>
        <template is="dom-repeat" items="[[items.results]]">
          <div class="card">
            <div>
              <p class="title">UUID:</p>
              <p class="value">[[item.uuid]]</p>
            </div>
            <div>
              <p class="title">Display:</p>
              <p class="value">[[item.display]]</p>
            </div>
          </div>
        </template>
      </div>`;
  }
  async fetch() {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Basic YWRtaW46QWRtaW4xMjM=");
      myHeaders.append("Cookie", "JSESSIONID=FE2FBD1F287477C74C655E0D467BA389");

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      var response = await fetch(
        "/openmrs/ws/rest/v1/obs?patient=070f0120-0283-4858-885d-a20d967729cf&limit=1",
        requestOptions
      ).then((res) => {
        this.loader = false;
        return res;
      });

      return response.text();
    } catch (err) {
      alert(err.message);
      return {};
    }
  }
  constructor() {
    super();
    this.loader = true;
    this.items = this.fetch();
    this.items = {
      results: [
        {
          uuid: "99a0c42b-d50e-4ae3-b826-d1959c737e74",
          display:
            "Visit Diagnoses: Primary, Confirmed diagnosis, Disease of bone and joint",
          links: [
            {
              rel: "self",
              uri: "/openmrs/ws/rest/v1/obs/99a0c42b-d50e-4ae3-b826-d1959c737e74",
            },
          ],
        },
        {
          uuid: "99a0c42b-d50e-4ae3-b826-d1959c737e74",
          display:
            "Visit Diagnoses: Primary, Confirmed diagnosis, Disease of bone and joint",
          links: [
            {
              rel: "self",
              uri: "/openmrs/ws/rest/v1/obs/99a0c42b-d50e-4ae3-b826-d1959c737e74",
            },
          ],
        },
        {
          uuid: "99a0c42b-d50e-4ae3-b826-d1959c737e74",
          display:
            "Visit Diagnoses: Primary, Confirmed diagnosis, Disease of bone and joint",
          links: [
            {
              rel: "self",
              uri: "/openmrs/ws/rest/v1/obs/99a0c42b-d50e-4ae3-b826-d1959c737e74",
            },
          ],
        },
      ],
      links: [
        {
          rel: "next",
          uri: "/openmrs/ws/rest/v1/obs?patient=070f0120-0283-4858-885d-a20d967729cf&limit=2&startIndex=2",
        },
      ],
    };
    console.log(this.items.links[0].uri);
  }
  static get properties() {}
}
customElements.define("view-observation", ViewObservation);
