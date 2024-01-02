class FootResto extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
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
            >Aditya Ahfazh Firmansyah</a
          >. | &copy; 2024.
        </p>
      </div>
        `;
  }
}

customElements.define("foot-resto", FootResto);
