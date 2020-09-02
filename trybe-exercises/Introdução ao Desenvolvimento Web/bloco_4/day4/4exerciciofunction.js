function quantidadedeletras(array){
    let nomes = array;
    let maisletras = "";
    for(i = 0; i < nomes.length; i += 1){
        for(j = 1; j < nomes.length; j += 1){
            if(nomes[i].length > nomes[j].length){
                maisletras = nomes[i];
            }
        }
    }
    return maisletras;
}