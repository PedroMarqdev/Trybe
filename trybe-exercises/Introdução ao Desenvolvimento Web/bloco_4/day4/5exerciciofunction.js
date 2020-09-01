function repeticao(array){
    let numeros = array
    let acertosnovos = 0;
    let acertosantigos = 0;
    let maiornumerorep = 0;
   for(i = 0; i < numeros.length; i += 1){
       for(j = 1; j < numeros.length; j += 1){
        if(numeros[i] == numeros[j]){
            acertosnovos += 1
        }
     }
     if(acertosnovos > acertosantigos){
         acertosantigos = acertosnovos;
         maiornumerorep = numeros[i]
         acertosnovos = 0;
     }
   }
   return maiornumerorep
}