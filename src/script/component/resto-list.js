import "./resto-item.js";
class RestoList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set restos(restos) {
    this._restos = restos;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    :host {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
    }
    </style>
    `;
    this._restos.forEach((resto) => {
      const restoItemElement = document.createElement("resto-item");
      restoItemElement.resto = resto;

      this.shadowDOM.appendChild(restoItemElement);
    });
  }
  renderError(message) {
    this.shadowDOM.innerHTML = `
    <style>
    .kata-salah {
      color: white;
      font-size: 1rem;
      font-family: sans-serif;
    }
    </style>
    `;
    this.shadowDOM.innerHTML += `<h2 class="kata-salah">${message}</h2>`;
  }
}

customElements.define("resto-list", RestoList);
