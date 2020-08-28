let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somarray = 0;
for (index = 0; index < numbers.length; index += 1){
  somarray += numbers[index]
}
let mediarray = somarray / numbers.length;
if (mediarray > 20) {
    console.log(`O valor é maior que 20!`);
}
else {
    console.log (`O valor é menor que 20`);
}
console.log(`A média do array é: ${mediarray}`);