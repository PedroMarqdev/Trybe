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
console.log(allLessons)