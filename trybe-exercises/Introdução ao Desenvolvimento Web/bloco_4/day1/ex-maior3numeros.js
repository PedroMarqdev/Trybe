let x = 5;
let y = 10;
let z = 20;

if (x > y && x > z) {
    console.log("O maior número é o " + x);
}
else if (y > x && y > z) {
    console.log("O maior número é o " + y);
}
else if (z > x && z > y) {
    console.log("O maior número é o " + z);
}
else {
    console.log("Provavelmente há números com valores iguais");
}