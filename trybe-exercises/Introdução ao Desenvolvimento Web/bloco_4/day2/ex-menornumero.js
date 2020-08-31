//Utilizando for, descubra qual o menor valor contido no array e imprima-o;
// Para isso, precisamos definir uma varíavel com qualquer número do array, pois precisaremos dela para definir o menor número.
// Logo depois, criamos um loop que irá comparar se a varíavel escolhida é menor ou igual a nossa varíavel de menor número.
// Caso ela seja, a nossa nova varíavel de menor número será o array[varíavel do loop for] naquele instante.
// Depois imprimimos no console, nossa varíavel de menor número.


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menornumero = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] <= menornumero) {
        menornumero = numbers[index];
    }
}
    console.log(`O menor número do array é o: ${menornumero}`);