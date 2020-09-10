// Transformar números romanos em números usuais

numerosRomanos ={
    I = 1,
    V = 5,
    X = 10,
    L = 50,
    C = 100,
    D = 500,
    M = 100,
}
let resultado = 0;
let arrayresultado = [];
function conversorRomano(numeral){
    let numeralarray = [numeral];
    for(i = 0; i < numeral.length; i += 1){
        for(let key in numerosRomanos){
            if(numeralarray[i] == numerosRomanos[key]){
                arrayresultado.push(numerosRomanos[key])
            }
        }
        
    }

}

