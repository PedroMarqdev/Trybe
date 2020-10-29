// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const phrase = str.toLowerCase().split("");
  const vowels = ["a", "e", "i", "o", "u"];
  const result = phrase.reduce((acc, word) => {
    console.log(acc);
    if (vowels.some((element) => word === element)) return (acc += 1);
    return acc;
  }, 0);
  return result;
}

module.exports = vowels;
