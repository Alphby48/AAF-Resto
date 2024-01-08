class FootResto extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });

    const font1 = document.createElement("link");
    font1.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    font1.rel = "stylesheet";
    document.head.appendChild(font1);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    </head>
      <style>
      *{
        margin: 0;
        padding: 0;
      }
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 100%;
        height: auto;
        background-color: aqua;
        
      }
      .footicon {
        width: 30%;
        display: flex;
        justify-content: space-around;
        text-decoration: none;
        list-style: none;
        margin: 2rem 0;
      }
      .footicon li a i {
        font-size: 1.5rem;
        animation: title-color 3s ease-in-out infinite alternate-reverse;
      }
      
      .credit {
        margin-top: 0.1rem;
        margin-bottom: 1rem;
      }
      .credit p {
        color: #000000;
      }
      .credit p a {
        color: #0330f7;
        text-decoration: none;
      }
      
      @keyframes title-color {
        0% {
          color: #e90b0b;
        }
        25% {
          color: #ee0cd0;
        }
        50% {
          color: #0011ff;
        }
        100% {
          color: #00ffdd;
        }
      }
      @media (max-width: 400px){
        .footicon{
          width: 90%;
        }
      }
      </style>

      <ul class="footicon">
        <li>
          <a
            href="https://instagram.com/alphby48?igshid=NzZlODBkYWE4Ng=="
            target="_blank"
            ><i class="fa-brands fa-instagram"></i
          ></a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100037459334778&mibextid=2JQ9oc"
            target="_blank"
            ><i class="fa-brands fa-facebook"></i
          ></a>
        </li>
        <li>
          <a
            href="https://x.com/alphboy48?t=MdsWso2hienM39LWJTfhyw&s=09"
            target="_blank"
            ><i class="fa-brands fa-twitter"></i
          ></a>
        </li>
        <li>
          <a
            href="https://www.tiktok.com/@alphaboyop?_t=8gOTIyScN6o&_r=1"
            target="_blank"
            ><i class="fa-brands fa-tiktok"></i
          ></a>
        </li>
        <li>
          <a
            href="https://youtube.com/@adityaahfazhfirmansyah4026?si=UQhlmG9_Pr7CEQi2"
            target="_blank"
            ><i class="fa-brands fa-youtube"></i
          ></a>
        </li>
      </ul>

      <div class="credit">
        <p>
          Created by
          <a href="https://github.com/Alphby48" target="_blank"
            >Aditya</a
          >. | &copy; 2024.
        </p>
      </div>
        `;
  }
}

customElements.define("foot-resto", FootResto);
