class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallBack() {
    this.render;
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#kolomCari").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
      :host {
        width: 80%;
      }
      .pencarian {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 30px;
      }
      .pencarian input {
        width: 60%;
        height: 40px;
        border-radius: 5px;
        padding: 5px;
        font-family: "Poppins";
      }
      .pencarian button {
        height: 40px;
        width: 80px;
        border-radius: 5px;
        background-color: #00ffdd;
        font-size: 16px;
        font-family: "Poppins";
      }
      .pencarian button:active {
        background-color: rgb(94, 255, 0);
      }
      </style>
        <div class="pencarian" id="pencarian">
        <input
          type="search"
          name=""
          id="kolomCari"
          placeholder="cari makanan favorit anda"
        />
        <button id="tombolCari" type="submit">Cari</button>
      </div>
        `;
    this.shadowDOM
      .querySelector("#tombolCari")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
