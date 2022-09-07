/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
const showBtn = document.getElementById("btn");
showBtn.addEventListener("click", () =>
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((users) => {
        // informacijos atvaizdavimas
        const output = document.getElementById("output");
        const userInfo = document.createElement("section");
        const brand = document.createElement("h2");
        const model = document.createElement("p");

        //textas, kuri ims is API
        brand.textContent = users.brand;
        model.textContent = users.models;
        //append
        output.append(userInfo);
        userInfo.append(brand, model);
      });
    })
);
