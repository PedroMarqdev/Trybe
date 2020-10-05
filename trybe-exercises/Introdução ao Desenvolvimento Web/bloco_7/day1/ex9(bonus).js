// 9- Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

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

  const exercise9 = () => {
    const allLessonsLength = Object.entries(allLessons).length
    let mathValue = 0;
    for (let index = 0; index < allLessonsLength ; index++) {
        let materia = Object.entries(allLessons)[index][1]
        if (Object.entries(materia)[0][1]  == 'Matemática') {
            mathValue += Object.entries(materia)[1][1]
        }
      }
      return mathValue;
  }