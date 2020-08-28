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

