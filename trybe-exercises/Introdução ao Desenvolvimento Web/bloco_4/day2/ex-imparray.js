// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// Para verificar se cada número é impar, devemos ver se é divisível por 2.
// Devemos criar uma varíavel que irá armazenar quantos números ímpares tem no array.
// Logo após, criamos um for que irá passar por cada número do array e irá verificar a condição se sua divisão por 2 é igual a 0. Caso seja, ele irá acrescentar
// em um a quantidade de números ímpares no array, senão, irá prosseguir para o próximo número.
// Após o fim, teremos outra estrutura de condição que irá verificar se a varíavel da quantidade de números ímpares seja maior ou diferente de 0.
// Caso seja, será exibido no console.log() a varíavel com a quantidade de números ímpares.
// Se não houver, deverá exibir também no console.log() A quantidade de números ímpares ou mostrar numa frase que não existem números ímpares.




let numbers = [5, 9, 3, 19, 70, 11, 100, 2, 35, 27];
let numbimpar = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 != 0) {
       numbimpar += 1;
    }
}
    switch(true) {
        case numbimpar > 0:
            console.log(`Existem ${numbimpar} números ímpares no array!`);
        break;
        default:
            console.log(`Não existem números ímpares!`);
    }

