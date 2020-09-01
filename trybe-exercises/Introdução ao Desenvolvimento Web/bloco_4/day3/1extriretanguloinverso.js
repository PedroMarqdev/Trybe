let n = 5;
let input = "";
let word = "*";
let inputposition = n

for(i = 0; i < n; i += 1){
    for(j = 0; j <= n; j += 1){
        if(j < inputposition){
            input += " "
        }
        else {
            input += word
        }
    }
    console.log(input)
    input = "";
    inputposition -= 1
}