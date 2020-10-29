const { one, two, three } = require("../Jest/ex5");
test("return === json?", () => {
  expect(one).toEqual(two);
  expect(one).not.toEqual(three);
  expect(two).not.toEqual(three);
});
