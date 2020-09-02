
function palindrome(word) {
    let arrayletras = word.split("");
    let verificacao = false;
    for (let i in arrayletras)
    if (arrayletras[i] != word[(word.length -1) - i]) {
       return verificacao
    }
    else {
        return verificacao = true;       
    }
}
