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
data.addEventListener("change", function () {
  const texto = data.value.split("/");
  const dia = parseInt(texto[0]);
  const mes = parseInt(texto[1]);
  const ano = parseInt(texto[2]);
  if (dia < 0 || dia > 31 || mes < 0 || mes > 12 || ano < 0) {
    dataverify = false;
  } else {
    dataverify = true;
  }
});

function verifiedData() {
  if (dataverify === false) {
    alert(
      "Provavelmente você colocou um dia, mês ou ano invalido, ou simplesmente não usou o formato dd/mm/aa"
    );
  }
}

submitButton.addEventListener("click", function (evt) {
  const inputs = document.querySelectorAll("input");
  const textArea = document.querySelectorAll('textarea')
  evt.preventDefault();
  const divResult = document.createElement("div");
  divResult.classList.add('resultado')
  document.body.appendChild(divResult);
  verifiedData();
  if (dataverify === true) {
    inputs.forEach(key => {
      const elementDiv = document.createElement("p");
      elementDiv.innerText = key.name + ": " + key.value;
      divResult.appendChild(elementDiv);
    });
    textArea.forEach(key => {
      const elementDiv = document.createElement("p");
      elementDiv.innerText = key.name + ": " + key.value;
      divResult.appendChild(elementDiv);
    });
  }
});

eraseButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    const divResult = document.querySelector('.resultado')
     divResult.remove()
     window.location.reload(true)
})
