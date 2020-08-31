let custo = 1000;
let venda = 2000;
let lucro = (venda - custo) - 0.2 * custo;

if (custo <= 0 || venda <= 0) {
    console.log("Opa, assim tu vais ter lucro não, em!");
}
else {
    console.log("Aí sim!, tu lucrou: R$:" + lucro + " reais");
}