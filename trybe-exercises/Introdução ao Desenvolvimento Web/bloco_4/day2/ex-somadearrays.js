//Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
// Somar valores no array -> Devo criar um loop for para percorre cada array e a 
//entregando numa varíavel que irá armazenar o resultado através do += em cada loop.
// Depois imprimir com console.log() com a varíavel criada como parâmetro.




numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somarray = 0;
for (index = 0; index < numbers.length; index += 1){
  somarray += numbers[index]
}
console.log(`A soma do array é: ${somarray}`);