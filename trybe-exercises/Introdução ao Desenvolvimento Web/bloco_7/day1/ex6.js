// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

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

const exercise6 = () => {
   Object.values(allLessons, lesson1)
   const arrayValues = [allLessons.lesson1.numeroEstudantes,
    allLessons.lesson2.numeroEstudantes,
    allLessons.lesson3.numeroEstudantes]
    let numberStudents = 0;
    for(key in arrayValues){
      numberStudents += arrayValues[key]
    }
    console.log(numberStudents)
}

exercise6()

