const sum = require('../Jest/ex1');

test('Se a soma corresponde aos retornos', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
    expect(sum(4, "5")).toBe(9);
})