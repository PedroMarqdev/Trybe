// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
    let count = 0;
  const letterA = names.forEach((key) => {
        for (let index in key) {
            key[index] === "A" ? count += 1 : count += 0
            key[index] === "a" ? count += 1 : count += 0
        }
  })
  return count
}
assert.deepEqual(containsA(), 20);