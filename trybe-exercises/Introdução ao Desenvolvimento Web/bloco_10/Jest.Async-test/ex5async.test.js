const Animals = [
  { name: "Dorminhoco", age: 1, type: "Dog" },
  { name: "Soneca", age: 2, type: "Dog" },
  { name: "Preguiça", age: 5, type: "Cat" },
];

const findAnimalByName = (name) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        const animalName = Animals.find((animal) => name === animal.name);
        if(animalName) return resolve(animalName)
        return reject("Nenhum animal com esse nome!")
      }, 200)
  });
};

const getAnimal = name => findAnimalByName(name).then(animal => animal)

const getAnimalsAge = (animalAge) => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const AnimalMap = Animals.some((animal) => {
                if(animal.age === animalAge){
                    return resolve({[animal.name]: `${animal.age} ano/s`})
                }
            })
            if(!AnimalMap) return reject('Não há animais com essa idade!')
        })
    }, 200)
)

// ---------------------

describe("Testando promise - findAnimalByName", () => {
  describe("Quando existe o animal com o nome procurado", () => {
    test("Retorne o objeto do animal", () => {
      expect.assertions(1);
      return getAnimal("Dorminhoco").then((animal) => {
        expect(animal).toEqual({ name: "Dorminhoco", age: 1, type: "Dog" });
      });
    });
  });

  describe("Quando não existe o animal com o nome procurado", () => {
    test("Retorna um erro", () => {
      expect.assertions(1);
      return getAnimal("Bob").catch((error) =>
        expect(error).toEqual("Nenhum animal com esse nome!")
      );
    });
  });
  describe("Quando tiver animais, retorna o nome e a idade deles", () => {
      it("Retorna um objeto com o animal Preguiça", () => {
        expect.assertions(1);
        return getAnimalsAge(5).then((result) => {
            expect(result).toEqual({Preguiça: '5 ano/s'})
        })
      })
  })
  describe("Quando não tiver animais, retorna um erro", () => {
      it("Retorna um erro", () => {
          expect.assertions(1);
          return getAnimalsAge(10).catch((error) => {
              expect(error).toEqual('Não há animais com essa idade!')
          })
      })
  })
});
