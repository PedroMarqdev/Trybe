// Preciso de algo para contar fazer a base de acordo com quantos asterísticos quero
// Logo depois, preciso estabelecer uma ordem para virar de fato uma pirãmide.

let n = 5;
let input = ""
let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;

 for(linha = 0; linha <= meio; linha += 1) {
     for(coluna = 1; coluna <= n; coluna += 1){
         if(coluna > direita && coluna < esquerda) {
             input += "*"
         }
         else {
             input += " "
         }
     }
     console.log(input)
     input = ''
     esquerda += 1;
     direita -= 1;
 }



