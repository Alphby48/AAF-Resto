import "../component/resto-list.js";
import "../component/search-bar.js";
import DataSource from "../data/data-source.js";

const main = () => {
  const kolomCari = document.querySelector("search-bar");
  // const tombolCari = document.getElementById("tombolCari");
  const makananElement = document.querySelector("resto-list");

  const tombolCariKlik = async () => {
    try {
      const hasil = await DataSource.cariMenu(kolomCari.value);
      renderHasil(hasil);
    } catch (message) {
      fallbackHasil(message);
    }
  };

  const renderHasil = (hasill) => {
    makananElement.restos = hasill;
  };

  const fallbackHasil = (message) => {
    makananElement.renderError(message);
  };

  kolomCari.clickEvent = tombolCariKlik;
};

export default main;
