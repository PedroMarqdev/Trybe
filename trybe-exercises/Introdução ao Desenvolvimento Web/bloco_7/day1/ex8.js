// 8- Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto
//, o nome da chave e o valor da chave. Exemplo:
// console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
//console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno: 'manhã'
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const allLessons = {
      lesson1: {},
      lesson2: {},
      lesson3: {},
  };

  const exercise5 = () => {
      const lessons = [lesson1, lesson2, lesson3]
      for(key in lessons){
          Object.assign(allLessons, {lesson1}, {lesson2}, {lesson3})
      }
      }

      exercise5();

const exercise8 = (lesson, key, value) => {
    const values = Object.entries(lesson)
    let verified = false;
    for (index in values) {
        if (values[index][0] == key && values[index][1] == value) {
            verified = true;
        }
    }
    return verified
}