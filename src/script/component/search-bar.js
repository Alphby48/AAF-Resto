class SearchBar extends HTMLElement {
  connectedCallBack() {
    this.render;
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#kolomCari").value;
  }

  render() {
    this.innerHTML = `
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
    this.querySelector("#tombolCari").addEventListener(
      "click",
      this._clickEvent
    );
  }
}

customElements.define("search-bar", SearchBar);
