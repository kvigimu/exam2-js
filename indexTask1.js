const form = document.querySelector("form");
const output = document.getElementById("output");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var kilos = document.getElementById("search").value;
  const kilosToSvarai = kilos * 2.2046;
  const kilostToGramai = kilos / 0.001;
  const kilosToUncijos = kilos * 35.274;
  if (kilos <= 0) {
    alert("Įvesk skaičių didesnį už 0");
  } else {
    output.innerHTML += `Svarai: ${kilosToSvarai.toFixed(4)} lb`;
    output.innerHTML += "<br>";
    output.innerHTML += `Gramai: ${kilostToGramai.toFixed(0)} g`;
    output.innerHTML += "<br>";
    output.innerHTML += `Uncijos: ${kilosToUncijos.toFixed(3)} oz`;
  }
}
