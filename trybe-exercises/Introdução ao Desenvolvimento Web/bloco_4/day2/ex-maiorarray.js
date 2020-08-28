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



