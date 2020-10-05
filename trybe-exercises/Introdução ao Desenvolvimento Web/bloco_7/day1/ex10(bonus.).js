// 10- Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

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

   const exercise10 = () => {
       let report1 = {}
       let report2 = {}
       const lessons = Object.entries(allLessons)
       for (let index = 0; index < lessons.length; index++) {
           if (Object.entries(lessons[index][1])[2][1] == 'Maria Clara'){
               report1.professor = Object.entries(lessons[index][1])[2][1]
               report1.aulas = () => aulas.push(Object.entries(lessons[index][1])[0][1])
               report1.estudantes += parseInt(Object.entries(lessons[index][1])[1][1])
           }
           else {
            report2.professor = Object.entries(lessons[index][1])[2][1]
            report2.aulas += (Object.entries(lessons[index][1]))[0][1]
            report2.estudantes += parseInt(Object.entries(lessons[index][1])[1][1])
        }
           }     
           return report1
       }
       