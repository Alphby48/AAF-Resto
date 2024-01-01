import restos from "./restos.js";

class DataSource {
  static cariMenu(keyword) {
    return new Promise((resolve, reject) => {
      const filrest = restos.filter((resto) =>
        resto.strMeal.toUpperCase().includes(keyword.toUpperCase())
      );

      if (filrest.length) {
        resolve(filrest);
      } else {
        reject(`${keyword} tidak di temukan`);
      }
    });
  }
}

export default DataSource;
