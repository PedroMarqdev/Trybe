// 6 - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas }. 
//Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos, 
// aqui além de reduce será necessário utilizar também a função map. 
const assert = require('assert');

const alunos = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notas = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];


function studentAverage() {
  const averaged = alunos.map((key, index) => {
   return students = {name: key, 
                      average: (notas[index].reduce((current, next) => current + next ) / notas[index].length)
   }})
   return averaged
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepEqual(studentAverage(), expected);