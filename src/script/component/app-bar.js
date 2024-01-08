class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });

    const font5 = document.createElement("link");
    font5.href =
      "https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap";
    font5.rel = "stylesheet";
    document.head.appendChild(font5);
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
      border-radius: 50%;
    }
    h2{
      font-family: 'Mochiy Pop One', sans-serif;
      font-size: 2.5rem;
    }
    @media(max-width: 400px){
      :host {
        gap: 20px;
      }
      img{
        width: 80px;
      }
      h2{
        font-size: 1.5rem;
      }
    }
    </style>
    
    <img src="https://pbs.twimg.com/media/GDJNQ2qbwAATMhU?format=jpg&name=large" alt="" />
    <h2>AAF Resto</h2>
        `;
  }
}

customElements.define("app-bar", AppBar);
