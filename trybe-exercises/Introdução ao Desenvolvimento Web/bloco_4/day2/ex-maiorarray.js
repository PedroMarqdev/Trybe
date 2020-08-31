//Utilizando for, descubra qual o maior valor contido no array e imprima-o;
// Para descobrir o maior valor contido, devemos verificar cada integrante do array, devemos fazer com que um elemento do array seja comparado a todos os outros.
// Assim, Cria-se um loop para o número que está sendo analisado e outro para o número que está sendo comparado ao analisado, teremos também condições
// que verificará se o número analisado e maior que o numero comparado, caso seja, irá aumentar em 1 uma varíavel que armazenará a quantidade de vezes
// que o número analisado é maior.
// Caso o número seja maior que a quantidade de elementos no array - 1 (Pois o número comparado não conta) 
// Será colocado num console.log() o array{varíavel do loop for do número analisado}.


let numbers = [100, 650, 3, 19, 70, 8, 9, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    let quantidademaior = 0;
    for (let oindex = 0; oindex < numbers.length; oindex += 1) {
        if (numbers[index] > numbers[oindex]) {
            quantidademaior += 1;
        }
        if (quantidademaior == (numbers.length - 1)) {
                console.log(`O maior número é o ${numbers[index]}`);
        }
      }

  }



