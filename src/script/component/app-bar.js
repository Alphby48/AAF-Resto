class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    * {
    margin: 0;
    padding: 1rem 0;
    box-sizing: border-box;
    }
    :host {
      display: flex;
      align-items: center;
      gap: 40px;
      justify-content: center;
      background-color: aqua;
      
    }
    img{
      width: 100px;
    }
    h2{
      font-family: "Poppins-Bold";
      font-size: 2.5rem;
    }
    </style>
    
    <img src="asset/img/resto aaf.png" alt="" />
    <h2>AAF Resto</h2>
        `;
  }
}

customElements.define("app-bar", AppBar);
