/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
const showBtn = document.getElementById("btn");

//vartotoju info
showBtn.addEventListener("click", () =>
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((users) => {
        // informacijos atvaizdavimas
        const output = document.getElementById("output");
        const userInfo = document.createElement("section");
        const login = document.createElement("h4");
        const avatar = document.createElement("h5");
        const msg = document.getElementById("message");

        //textas, kuri ims is API
        login.textContent = users.login;
        avatar.textContent = users.avatar_url;
        //append
        output.append(userInfo);
        userInfo.append(login, avatar);
        //paslepti zinute
        msg.style.display = "none";
        //
        avatar.style.paddingBottom = "10px";
        avatar.style.color = "darkgrey";
      });
    })
);
