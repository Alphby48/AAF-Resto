import "./resto-item.js";
class RestoList extends HTMLElement {
  set restos(restos) {
    this._restos = restos;
    this.render();
  }

  render() {
    this.innerHTML = "";
    this._restos.forEach((resto) => {
      const restoItemElement = document.createElement("resto-item");
      restoItemElement.resto = resto;

      this.appendChild(restoItemElement);
    });
  }
  renderError(message) {
    this.innerHTML = "";
    this.innerHTML += `<h2 class="kata-salah">${message}</h2>`;
  }
}

customElements.define("resto-list", RestoList);
