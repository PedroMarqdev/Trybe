// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
// Percorre o array -> Criar um loop for para pegar um elemento do array
// Imprimir os valores -> Utilizar no loop for e pegar o array[index] como parâmetro.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index = 0; index < numbers.length; index += 1) {
    console.log(`O número do array da posição ${index} e o conteúdo é ${numbers[index]}`);
}