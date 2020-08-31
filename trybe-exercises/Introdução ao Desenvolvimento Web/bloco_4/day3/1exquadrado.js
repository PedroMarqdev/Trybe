let conteudo = ``

for(var nlinhas = 0; nlinhas < 5; nlinhas += 1){
    conteudo += `*`
}
for(let ncolunas = 0; ncolunas < nlinhas; ncolunas += 1) {
    console.log(conteudo)
}