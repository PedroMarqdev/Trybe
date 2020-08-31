//Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". 
//Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
//Com a lógica da ideia anterior, deve ser criado uma estrutura de condição que irá verificar se o valor da varíavel a qual armazena a média é maior que 20, 
//Caso seja, irá imprimir no console.log() Que é maior. Senão, irá imprimir no console.log() que é menor.






let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somarray = 0;
for (index = 0; index < numbers.length; index += 1){
  somarray += numbers[index]
}
let mediarray = somarray / numbers.length;
if (mediarray > 20) {
    console.log(`O valor é maior que 20!`);
}
else {
    console.log (`O valor é menor que 20`);
}
console.log(`A média do array é: ${mediarray}`);