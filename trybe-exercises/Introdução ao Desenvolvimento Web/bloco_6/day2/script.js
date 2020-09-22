const cidades = document.querySelector(".estados");
const data = document.querySelector(".data");
const submitButton = document.querySelector("#submitButton");
const eraseButton = document.querySelector("#erase");
let dataverify = false;
let contador = 0;
let cityObject = {
  AC: "Acre",
  AL: "Alagoas",
  AP: "Amapá",
  AM: "Amazonas",
  BA: "Bahia",
  CE: "Ceará",
  DF: "Distrito Federal",
  ES: "Espirito Santo",
  GO: "Goiás",
  MA: "Maranhão",
  MS: "Mato Grosso do Sul",
  MT: "Mato Grosso",
  MG: "Minas Gerais",
  PA: "Pará",
  PB: "Paraíba",
  PR: "Paraná",
  PE: "Pernambuco",
  PI: "Piauí",
  RJ: "Rio de Janeiro",
  RN: "Rio Grande do Norte",
  RS: "Rio Grande do Sul",
  RO: "Rondônia",
  RR: "Roraima",
  SC: "Santa Catarina",
  SP: "São Paulo",
  SE: "Sergipe",
  TO: "Tocantins",
};

for (key in cityObject) {
  let option = document.createElement("option");
  option.innerText = cityObject[key];
  document.querySelector("#search-select").appendChild(option);
}

for (index = 0; index < 27; index += 1) {
  let options = document.querySelectorAll("#search-select option");
  options[contador].value = Object.getOwnPropertyNames(cityObject)[index];
  contador += 1;
}

eraseButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    const divResult = document.querySelector('.resultado')
        if (divResult){
          divResult.remove()
          window.location.reload(true)
        }
        else{
          window.location.reload(true)
        }
})
