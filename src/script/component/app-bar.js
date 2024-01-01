class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <img src="asset/img/resto aaf.png" alt="" />
    <h2>AAF Resto</h2>
        `;
  }
}

customElements.define("app-bar", AppBar);
