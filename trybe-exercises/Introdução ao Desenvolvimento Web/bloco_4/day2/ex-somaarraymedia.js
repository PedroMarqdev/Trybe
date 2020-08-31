//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// Calcular o valor inteiro da média através de um loop for que percorre cada elemento do array e armazena suas somas numa varíavel
// Depois jogar numa outra varíavel que usa a varíavel de soma como parâmetro e a divide pela quantidade de elementos no array.
// No console.log() Será colocado a varíavel dá média como parâmetro.



let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somarray = 0;
for (index = 0; index < numbers.length; index += 1){
  somarray += numbers[index]
}
let mediarray = somarray / numbers.length;
console.log(`A média do array é: ${mediarray}`);