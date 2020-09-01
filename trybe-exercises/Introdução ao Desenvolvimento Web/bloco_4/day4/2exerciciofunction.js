function maiornum(array){
   let arrayescolhido = array;
   let arraymaior = 0;
   let indicedomaior = 0;
   for(i = 0; i < arrayescolhido.length; i += 1){
     if(arrayescolhido[i] > arraymaior) {
         arraymaior = arrayescolhido[i]
         indicedomaior = i;
     }
   }
   return `O índice do maior número é o/a ${indicedomaior}`
}
