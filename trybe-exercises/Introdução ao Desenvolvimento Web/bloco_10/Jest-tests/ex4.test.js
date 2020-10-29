const myFizzBuzz = require("../Jest/ex4");

test("return expected value", () => {
  expect(myFizzBuzz(15)).toBe("fizzbuzz");
  expect(myFizzBuzz(9)).toBe("fizz");
  expect(myFizzBuzz(5)).toBe("buzz");
  expect(myFizzBuzz(4)).toBe(4);
  expect(myFizzBuzz("9")).toBe(false);
});
