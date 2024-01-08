class RestoItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });

    const font2 = document.createElement("link");
    font2.href =
      "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,200;0,300;1,200&display=swap";
    font2.rel = "stylesheet";
    document.head.appendChild(font2);

    const font4 = document.createElement("link");
    font4.href =
      "https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Josefin+Sans:ital,wght@0,200;0,300;1,200&display=swap";
    font4.rel = "stylesheet";
    document.head.appendChild(font4);
  }
  set resto(resto) {
    this._resto = resto;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    resto-list {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
    }
    :host {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 90%;
      margin-top: 1rem;
    }
    
    .jdl-menu {
      margin: 2rem;
      font-size: 3rem;
      color: aliceblue;
      font-family: 'Caveat Brush', cursive;
    }
    .info-resto {
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: center;
    }
    .info-resto .menu-makanan {
      width: 500px;
      border-radius: 10px;
    }
    .descrip-resto {
      color: rgb(255, 255, 255);
      margin: 2rem 0;
    }
    .descrip-resto h3 {
      margin-bottom: 1.1rem;
      font-size: 1.6rem;
      font-family: 'Kalam', cursive;
    }
    .descrip-resto p {
      padding-left: 2rem;
      text-indent: 2.5rem;
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 600;
    }
    .komposisi {
      color: rgb(255, 255, 255);
      margin-bottom: 2rem;
      width: 100%;
    }
    .komposisi ul {
      padding-left: 2.3rem;
      margin-top: 1.1rem;
      line-height: 1.6;
    }
    .komposisi ul li {
      list-style: none;
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 600;
    }
    @media (max-width: 400px){
      html{
        font-size: 55%;
      }
      .info-resto .menu-makanan {
        width: 90%;
      }
    }
    </style>
        <h2 class="jdl-menu">${this._resto.strMeal}</h2>
        <div class="info-resto">
            <img class="menu-makanan" src="${this._resto.strMealThumb}" alt="Fan Art">
          <div class="descrip-resto">
            <h3>Name Food : ${this._resto.strMeal}</h3>
            <h3>From : ${this._resto.strArea}</h3>
            <div class="komposisi">
            <h3>Ingredient :</h3>
            <ul>
              <li>${this._resto.strIngredient1}</li>
              <li>${this._resto.strIngredient2}</li>
              <li>${this._resto.strIngredient3}</li>
              <li>${this._resto.strIngredient4}</li>
              <li>${this._resto.strIngredient5}</li>
              <li>${this._resto.strIngredient6}</li>
              <li>${this._resto.strIngredient7}</li>
              <li>${this._resto.strIngredient8}</li>
              <li>${this._resto.strIngredient9}</li>
              <li>${this._resto.strIngredient10}</li>
              <li>${this._resto.strIngredient11}</li>
              <li>${this._resto.strIngredient12}</li>
              <li>${this._resto.strIngredient13}</li>
              <li>${this._resto.strIngredient14}</li>
              <li>${this._resto.strIngredient15}</li>
              <li>${this._resto.strIngredient16}</li>
              <li>${this._resto.strIngredient17}</li>
              <li>${this._resto.strIngredient18}</li>
              <li>${this._resto.strIngredient19}</li>
              <li>${this._resto.strIngredient20}</li>
          </ul>
          </div>
            <h3>Instructions :</h3>
            <p>${this._resto.strInstructions}</p>
          </div>
          
        </div>
        `;
  }
}

customElements.define("resto-item", RestoItem);
