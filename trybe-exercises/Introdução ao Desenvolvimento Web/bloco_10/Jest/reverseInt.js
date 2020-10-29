// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  if (n.toString().split("")[0] === "-") {
    const number = n.toString().split("");
    number.splice(0, 1);
    number.push("-");
    return parseInt(number.reverse().join(""));
  }
  return parseInt(n.toString().split("").reverse().join(""));
}

module.exports = reverseInt;
