//Utilizando for, crie uma array que vá de 1 até 25 e imprima o resultado;
//Ao criar uma array, você deve utilizar for com o comando.push(varíavel do for) para criar uma array de 1 a 25
// Logo após, deve imprimir o array no console.log()


let numbers = [];

for (let index = 1; index < 26; index += 1) {
    numbers.push(index);
}
console.log(numbers);