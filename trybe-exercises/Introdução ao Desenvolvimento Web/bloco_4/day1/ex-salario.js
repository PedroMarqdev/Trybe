let salario = 6000;

if (salario <= 1556.94) {
    salario *= 0.92
}
else if (salario > 1556.95 && salario < 2594.92) {
    salario *= 0.91
}
else if (salario > 2594.93 && salario < 5189.82) {
    salario *= 0.89
}
else if (salario > 5189.82) {
    salario -= 570.88;
}
else {
    console.log("O valor está com algum erro")
}

if (salario <= 1903.98) {
    console.log("O seu salário total é: R$: " + salario);
}
else if (salario > 1903.99 && salario < 2826.65) {
    salario -= (0.075 * salario - 142,80);
    console.log("O seu salário total é: R$: " + salario);
}
else if (salario > 2826.66 && salario < 3751.05) {
    salario -= (0.15 * salario - 354,80);
    console.log("O seu salário total é: R$: " + salario);
}
else if (salario > 3751.06 && salario < 4664.68) {
    salario -= (0.225 * salario - 636,16);
    console.log("O seu salário total é: R$: " + salario);
}
else if (salario > 4664.68) {
    salario -= (0.275 * salario - 869,36);
    console.log("O seu salário total é: R$: " + salario);
}
else{
    console.log("O valor está com algum erro");
}